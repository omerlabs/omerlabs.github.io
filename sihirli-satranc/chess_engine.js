/**
 * Sihirli Satranç - Tam Kural Satranç Motoru ve Yapay Zeka
 * 
 * Özellikler:
 * - Tam satranç kuralları (Rok, Geçerken Alma, Terfi, Şah, Mat, Pat)
 * - Hamle geri alma geçmişi (Undo)
 * - Çocuk dostu bot yapay zekaları (Minik Tavşan, Kurnaz Tilki, Bilge Baykuş, Kral Aslan)
 * - Maskot için akıllı Türkçe ipucu üretici
 */

class ChessEngine {
  constructor(fen) {
    this.initialFen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
    this.loadFen(this.initialFen);
  }

  loadFen(fen) {
    this.board = new Array(64).fill(null);
    const parts = fen.trim().split(/\s+/);
    const piecePlacement = parts[0];
    let row = 0;
    let col = 0;

    for (const char of piecePlacement) {
      if (char === '/') {
        row++;
        col = 0;
      } else if (char >= '1' && char <= '8') {
        col += parseInt(char, 10);
      } else {
        this.board[row * 8 + col] = char;
        col++;
      }
    }

    this.turn = (parts[1] === 'b') ? 'b' : 'w';
    this.castling = {
      K: parts[2] ? parts[2].includes('K') : false,
      Q: parts[2] ? parts[2].includes('Q') : false,
      k: parts[2] ? parts[2].includes('k') : false,
      q: parts[2] ? parts[2].includes('q') : false
    };

    this.enPassant = (parts[3] && parts[3] !== '-') ? this.algebraicToSquare(parts[3]) : null;
    this.halfMoves = parts[4] ? parseInt(parts[4], 10) : 0;
    this.fullMoves = parts[5] ? parseInt(parts[5], 10) : 1;
    this.history = [];
    this.capturedWhite = [];
    this.capturedBlack = [];
  }

  squareToAlgebraic(sq) {
    const file = String.fromCharCode('a'.charCodeAt(0) + (sq % 8));
    const rank = 8 - Math.floor(sq / 8);
    return file + rank;
  }

  algebraicToSquare(str) {
    if (!str || str.length < 2) return null;
    const file = str.charCodeAt(0) - 'a'.charCodeAt(0);
    const rank = 8 - parseInt(str[1], 10);
    return rank * 8 + file;
  }

  isWhite(piece) {
    return piece && piece === piece.toUpperCase();
  }

  isBlack(piece) {
    return piece && piece === piece.toLowerCase();
  }

  getColor(piece) {
    if (!piece) return null;
    return this.isWhite(piece) ? 'w' : 'b';
  }

  clone() {
    const cloneEngine = new ChessEngine();
    cloneEngine.board = [...this.board];
    cloneEngine.turn = this.turn;
    cloneEngine.castling = { ...this.castling };
    cloneEngine.enPassant = this.enPassant;
    cloneEngine.halfMoves = this.halfMoves;
    cloneEngine.fullMoves = this.fullMoves;
    cloneEngine.capturedWhite = [...this.capturedWhite];
    cloneEngine.capturedBlack = [...this.capturedBlack];
    return cloneEngine;
  }

  // Kare saldiri altinda mi?
  isSquareAttacked(sq, byColor) {
    const r = Math.floor(sq / 8);
    const c = sq % 8;

    // 1. Piyon saldirilari
    if (byColor === 'w') {
      const pR = r + 1;
      if (pR < 8) {
        if (c > 0 && this.board[pR * 8 + (c - 1)] === 'P') return true;
        if (c < 7 && this.board[pR * 8 + (c + 1)] === 'P') return true;
      }
    } else {
      const pR = r - 1;
      if (pR >= 0) {
        if (c > 0 && this.board[pR * 8 + (c - 1)] === 'p') return true;
        if (c < 7 && this.board[pR * 8 + (c + 1)] === 'p') return true;
      }
    }

    // 2. At saldirilari
    const knightMoves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];
    const knightChar = byColor === 'w' ? 'N' : 'n';
    for (const [dr, dc] of knightMoves) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
        if (this.board[nr * 8 + nc] === knightChar) return true;
      }
    }

    // 3. Sah saldirisi
    const kingChar = byColor === 'w' ? 'K' : 'k';
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (this.board[nr * 8 + nc] === kingChar) return true;
        }
      }
    }

    // 4. Capraz saldirilar (Fil / Vezir)
    const bishopChar = byColor === 'w' ? 'B' : 'b';
    const queenChar = byColor === 'w' ? 'Q' : 'q';
    const diagDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (const [dr, dc] of diagDirs) {
      let step = 1;
      while (true) {
        const nr = r + dr * step;
        const nc = c + dc * step;
        if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
        const p = this.board[nr * 8 + nc];
        if (p) {
          if (p === bishopChar || p === queenChar) return true;
          break;
        }
        step++;
      }
    }

    // 5. Duz saldirilar (Kale / Vezir)
    const rookChar = byColor === 'w' ? 'R' : 'r';
    const straightDirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dr, dc] of straightDirs) {
      let step = 1;
      while (true) {
        const nr = r + dr * step;
        const nc = c + dc * step;
        if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
        const p = this.board[nr * 8 + nc];
        if (p) {
          if (p === rookChar || p === queenChar) return true;
          break;
        }
        step++;
      }
    }

    return false;
  }

  findKing(color) {
    const kingChar = color === 'w' ? 'K' : 'k';
    for (let i = 0; i < 64; i++) {
      if (this.board[i] === kingChar) return i;
    }
    return -1;
  }

  isInCheck(color) {
    const kingSq = this.findKing(color);
    if (kingSq === -1) return false;
    const opponent = color === 'w' ? 'b' : 'w';
    return this.isSquareAttacked(kingSq, opponent);
  }

  // Hamle uretici
  generatePseudoMoves(color) {
    const moves = [];
    const opp = color === 'w' ? 'b' : 'w';

    for (let sq = 0; sq < 64; sq++) {
      const piece = this.board[sq];
      if (!piece || this.getColor(piece) !== color) continue;

      const r = Math.floor(sq / 8);
      const c = sq % 8;
      const type = piece.toUpperCase();

      if (type === 'P') {
        const forward = color === 'w' ? -1 : 1;
        const startRank = color === 'w' ? 6 : 1;
        const promoRank = color === 'w' ? 0 : 7;

        // 1 kare ileri
        const nextR = r + forward;
        if (nextR >= 0 && nextR < 8) {
          const nextSq = nextR * 8 + c;
          if (!this.board[nextSq]) {
            if (nextR === promoRank) {
              for (const pr of ['Q', 'R', 'B', 'N']) {
                moves.push({ from: sq, to: nextSq, piece, promotion: pr });
              }
            } else {
              moves.push({ from: sq, to: nextSq, piece });
              // 2 kare ileri (baslangic)
              if (r === startRank) {
                const doubleR = r + forward * 2;
                const doubleSq = doubleR * 8 + c;
                if (!this.board[doubleSq]) {
                  moves.push({ from: sq, to: doubleSq, piece, isDoublePawn: true });
                }
              }
            }
          }

          // Capraz yeme
          for (const dc of [-1, 1]) {
            const capC = c + dc;
            if (capC >= 0 && capC < 8) {
              const capSq = nextR * 8 + capC;
              const target = this.board[capSq];
              if (target && this.getColor(target) === opp) {
                if (nextR === promoRank) {
                  for (const pr of ['Q', 'R', 'B', 'N']) {
                    moves.push({ from: sq, to: capSq, piece, captured: target, promotion: pr });
                  }
                } else {
                  moves.push({ from: sq, to: capSq, piece, captured: target });
                }
              } else if (this.enPassant === capSq) {
                // Gecerken alma
                moves.push({ from: sq, to: capSq, piece, isEnPassant: true, captured: color === 'w' ? 'p' : 'P' });
              }
            }
          }
        }
      } else if (type === 'N') {
        const jumps = [
          [-2, -1], [-2, 1], [-1, -2], [-1, 2],
          [1, -2], [1, 2], [2, -1], [2, 1]
        ];
        for (const [dr, dc] of jumps) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
            const toSq = nr * 8 + nc;
            const target = this.board[toSq];
            if (!target) {
              moves.push({ from: sq, to: toSq, piece });
            } else if (this.getColor(target) === opp) {
              moves.push({ from: sq, to: toSq, piece, captured: target });
            }
          }
        }
      } else if (type === 'B' || type === 'R' || type === 'Q') {
        const dirs = [];
        if (type === 'B' || type === 'Q') {
          dirs.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
        }
        if (type === 'R' || type === 'Q') {
          dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
        }

        for (const [dr, dc] of dirs) {
          let step = 1;
          while (true) {
            const nr = r + dr * step;
            const nc = c + dc * step;
            if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) break;
            const toSq = nr * 8 + nc;
            const target = this.board[toSq];
            if (!target) {
              moves.push({ from: sq, to: toSq, piece });
            } else {
              if (this.getColor(target) === opp) {
                moves.push({ from: sq, to: toSq, piece, captured: target });
              }
              break;
            }
            step++;
          }
        }
      } else if (type === 'K') {
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
              const toSq = nr * 8 + nc;
              const target = this.board[toSq];
              if (!target) {
                moves.push({ from: sq, to: toSq, piece });
              } else if (this.getColor(target) === opp) {
                moves.push({ from: sq, to: toSq, piece, captured: target });
              }
            }
          }
        }

        // Rok Hamleleri
        if (color === 'w' && sq === 60 && !this.isInCheck('w')) {
          // Sah kanadi (e1 -> g1)
          if (this.castling.K && !this.board[61] && !this.board[62] && this.board[63] === 'R') {
            if (!this.isSquareAttacked(61, 'b') && !this.isSquareAttacked(62, 'b')) {
              moves.push({ from: 60, to: 62, piece, isCastling: 'K' });
            }
          }
          // Vezir kanadi (e1 -> c1)
          if (this.castling.Q && !this.board[59] && !this.board[58] && !this.board[57] && this.board[56] === 'R') {
            if (!this.isSquareAttacked(59, 'b') && !this.isSquareAttacked(58, 'b')) {
              moves.push({ from: 60, to: 58, piece, isCastling: 'Q' });
            }
          }
        } else if (color === 'b' && sq === 4 && !this.isInCheck('b')) {
          // Sah kanadi (e8 -> g8)
          if (this.castling.k && !this.board[5] && !this.board[6] && this.board[7] === 'r') {
            if (!this.isSquareAttacked(5, 'w') && !this.isSquareAttacked(6, 'w')) {
              moves.push({ from: 4, to: 6, piece, isCastling: 'k' });
            }
          }
          // Vezir kanadi (e8 -> c8)
          if (this.castling.q && !this.board[3] && !this.board[2] && !this.board[1] && this.board[0] === 'r') {
            if (!this.isSquareAttacked(3, 'w') && !this.isSquareAttacked(2, 'w')) {
              moves.push({ from: 4, to: 2, piece, isCastling: 'q' });
            }
          }
        }
      }
    }

    return moves;
  }

  // Sadece sahini tehdit altinda birakmayan yasal hamleler
  getLegalMoves(color = this.turn) {
    const pseudos = this.generatePseudoMoves(color);
    const legal = [];

    for (const m of pseudos) {
      this.makeMove(m);
      if (!this.isInCheck(color)) {
        legal.push(m);
      }
      this.undoMove();
    }

    return legal;
  }

  getLegalMovesForSquare(sq) {
    const piece = this.board[sq];
    if (!piece || this.getColor(piece) !== this.turn) return [];
    return this.getLegalMoves().filter(m => m.from === sq);
  }

  makeMove(move) {
    const { from, to, piece, captured, promotion, isCastling, isEnPassant, isDoublePawn } = move;

    // Geri alma icin mevcut durumu kaydet
    const stateRecord = {
      move,
      prevCastling: { ...this.castling },
      prevEnPassant: this.enPassant,
      prevHalfMoves: this.halfMoves,
      prevFullMoves: this.fullMoves,
      capturedPiece: captured || null
    };
    this.history.push(stateRecord);

    // Tahta degisimi
    this.board[from] = null;

    if (isEnPassant) {
      const epCapturedSq = this.turn === 'w' ? to + 8 : to - 8;
      stateRecord.epCapturedSq = epCapturedSq;
      stateRecord.epCapturedPiece = this.board[epCapturedSq];
      this.board[epCapturedSq] = null;
      if (this.turn === 'w') this.capturedBlack.push('p');
      else this.capturedWhite.push('P');
    } else if (captured) {
      if (this.isWhite(captured)) this.capturedWhite.push(captured);
      else this.capturedBlack.push(captured);
    }

    if (promotion) {
      this.board[to] = this.turn === 'w' ? promotion.toUpperCase() : promotion.toLowerCase();
    } else {
      this.board[to] = piece;
    }

    // Rok hamlesi kulesi tasima
    if (isCastling) {
      if (isCastling === 'K') {
        this.board[63] = null;
        this.board[61] = 'R';
      } else if (isCastling === 'Q') {
        this.board[56] = null;
        this.board[59] = 'R';
      } else if (isCastling === 'k') {
        this.board[7] = null;
        this.board[5] = 'r';
      } else if (isCastling === 'q') {
        this.board[0] = null;
        this.board[3] = 'r';
      }
    }

    // Rok haklarinin guncellenmesi
    if (piece === 'K') {
      this.castling.K = false;
      this.castling.Q = false;
    } else if (piece === 'k') {
      this.castling.k = false;
      this.castling.q = false;
    } else if (piece === 'R') {
      if (from === 63) this.castling.K = false;
      if (from === 56) this.castling.Q = false;
    } else if (piece === 'r') {
      if (from === 7) this.castling.k = false;
      if (from === 0) this.castling.q = false;
    }

    // Eger kale yenmisse de o tarafa rok hakki biter
    if (to === 63) this.castling.K = false;
    if (to === 56) this.castling.Q = false;
    if (to === 7) this.castling.k = false;
    if (to === 0) this.castling.q = false;

    // En passant hedef karesi
    if (isDoublePawn) {
      this.enPassant = this.turn === 'w' ? from - 8 : from + 8;
    } else {
      this.enPassant = null;
    }

    if (this.turn === 'b') {
      this.fullMoves++;
    }
    this.turn = this.turn === 'w' ? 'b' : 'w';

    return true;
  }

  undoMove() {
    if (this.history.length === 0) return null;
    const record = this.history.pop();
    const { move, prevCastling, prevEnPassant, prevHalfMoves, prevFullMoves, capturedPiece } = record;

    this.turn = this.turn === 'w' ? 'b' : 'w';
    this.castling = prevCastling;
    this.enPassant = prevEnPassant;
    this.halfMoves = prevHalfMoves;
    this.fullMoves = prevFullMoves;

    // Tasi geri tasi
    this.board[move.from] = move.piece;
    this.board[move.to] = null;

    if (move.isEnPassant) {
      this.board[record.epCapturedSq] = record.epCapturedPiece;
      if (this.turn === 'w') this.capturedBlack.pop();
      else this.capturedWhite.pop();
    } else if (capturedPiece) {
      this.board[move.to] = capturedPiece;
      if (this.isWhite(capturedPiece)) this.capturedWhite.pop();
      else this.capturedBlack.pop();
    }

    // Rok hamlesi kuleyi geri al
    if (move.isCastling) {
      if (move.isCastling === 'K') {
        this.board[61] = null;
        this.board[63] = 'R';
      } else if (move.isCastling === 'Q') {
        this.board[59] = null;
        this.board[56] = 'R';
      } else if (move.isCastling === 'k') {
        this.board[5] = null;
        this.board[7] = 'r';
      } else if (move.isCastling === 'q') {
        this.board[3] = null;
        this.board[0] = 'r';
      }
    }

    return move;
  }

  isCheckmate() {
    return this.isInCheck(this.turn) && this.getLegalMoves().length === 0;
  }

  isStalemate() {
    return !this.isInCheck(this.turn) && this.getLegalMoves().length === 0;
  }

  isGameOver() {
    return this.isCheckmate() || this.isStalemate();
  }

  // --- Degerlendirme ve Yapay Zeka ---
  evaluate() {
    const pieceValues = {
      P: 100, N: 320, B: 330, R: 500, Q: 900, K: 20000,
      p: -100, n: -320, b: -330, r: -500, q: -900, k: -20000
    };

    // Pozisyon tablolari (Merkez kontrolu ve ilerleme)
    const pawnTable = [
      0,  0,  0,  0,  0,  0,  0,  0,
      50, 50, 50, 50, 50, 50, 50, 50,
      10, 10, 20, 30, 30, 20, 10, 10,
       5,  5, 10, 27, 27, 10,  5,  5,
       0,  0,  0, 25, 25,  0,  0,  0,
       5, -5,-10,  0,  0,-10, -5,  5,
       5, 10, 10,-20,-20, 10, 10,  5,
       0,  0,  0,  0,  0,  0,  0,  0
    ];

    const knightTable = [
      -50,-40,-30,-30,-30,-30,-40,-50,
      -40,-20,  0,  0,  0,  0,-20,-40,
      -30,  0, 10, 15, 15, 10,  0,-30,
      -30,  5, 15, 20, 20, 15,  5,-30,
      -30,  0, 15, 20, 20, 15,  0,-30,
      -30,  5, 10, 15, 15, 10,  5,-30,
      -40,-20,  0,  5,  5,  0,-20,-40,
      -50,-40,-30,-30,-30,-30,-40,-50
    ];

    let score = 0;
    for (let sq = 0; sq < 64; sq++) {
      const p = this.board[sq];
      if (!p) continue;
      score += pieceValues[p] || 0;

      if (p === 'P') score += pawnTable[sq];
      else if (p === 'p') score -= pawnTable[63 - sq];
      else if (p === 'N') score += knightTable[sq];
      else if (p === 'n') score -= knightTable[63 - sq];
    }

    return score;
  }

  // Minimax ile en iyi hamleyi bulma
  minimax(depth, alpha, beta, isMaximizing) {
    if (depth === 0 || this.isGameOver()) {
      return { score: this.evaluate() };
    }

    const moves = this.getLegalMoves();
    if (moves.length === 0) {
      if (this.isInCheck(this.turn)) {
        return { score: isMaximizing ? -99999 + (4 - depth) : 99999 - (4 - depth) };
      }
      return { score: 0 }; // Pat
    }

    // Hamle siralama: Yemeler once
    moves.sort((a, b) => (b.captured ? 10 : 0) - (a.captured ? 10 : 0));

    let bestMove = moves[0];

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (const m of moves) {
        this.makeMove(m);
        const ev = this.minimax(depth - 1, alpha, beta, false).score;
        this.undoMove();
        if (ev > maxEval) {
          maxEval = ev;
          bestMove = m;
        }
        alpha = Math.max(alpha, ev);
        if (beta <= alpha) break;
      }
      return { score: maxEval, move: bestMove };
    } else {
      let minEval = Infinity;
      for (const m of moves) {
        this.makeMove(m);
        const ev = this.minimax(depth - 1, alpha, beta, true).score;
        this.undoMove();
        if (ev < minEval) {
          minEval = ev;
          bestMove = m;
        }
        beta = Math.min(beta, ev);
        if (beta <= alpha) break;
      }
      return { score: minEval, move: bestMove };
    }
  }

  // Karakterli Bot Hamle Secici
  getBotMove(botId = 'tavsan') {
    const legalMoves = this.getLegalMoves();
    if (legalMoves.length === 0) return null;

    if (botId === 'tavsan') {
      // Minik Tavsan: %40 ihtimalle rastgele/acemi hamle yapar veya tasini kaptirir
      if (Math.random() < 0.40) {
        // Zararsiz veya rastgele bir hamle
        return legalMoves[Math.floor(Math.random() * legalMoves.length)];
      }
      // Geri kalaninda derinlik 1
      const res = this.minimax(1, -Infinity, Infinity, this.turn === 'w');
      return res.move || legalMoves[0];
    } else if (botId === 'tilki') {
      // Kurnaz Tilki: Hizli saldiri ve tas yeme oncelikli
      const capturingMoves = legalMoves.filter(m => m.captured);
      if (capturingMoves.length > 0 && Math.random() < 0.65) {
        return capturingMoves[Math.floor(Math.random() * capturingMoves.length)];
      }
      const res = this.minimax(2, -Infinity, Infinity, this.turn === 'w');
      return res.move || legalMoves[0];
    } else if (botId === 'baykus') {
      // Bilge Baykus: Derinlik 2-3 saglam hamleler
      const res = this.minimax(2, -Infinity, Infinity, this.turn === 'w');
      return res.move || legalMoves[0];
    } else if (botId === 'aslan') {
      // Kral Aslan: En iyi derinlik (3)
      const res = this.minimax(3, -Infinity, Infinity, this.turn === 'w');
      return res.move || legalMoves[0];
    }

    return legalMoves[0];
  }

  // Akilli Turkce Ipucu Uretici
  getHintForPlayer() {
    const legalMoves = this.getLegalMoves('w');
    if (legalMoves.length === 0) return null;

    // Oncelikle 1 hamlede mat var mi kontrol et
    for (const m of legalMoves) {
      this.makeMove(m);
      if (this.isCheckmate()) {
        this.undoMove();
        return {
          move: m,
          text: `İşte büyük fırsat! ${this.getPieceNameTr(m.piece)} ile ${this.squareToAlgebraic(m.to).toUpperCase()} karesine giderek şah ve mat yapabilirsin! ✨👑`
        };
      }
      this.undoMove();
    }

    // Bedava tas yeme firsati var mi?
    for (const m of legalMoves) {
      if (m.captured) {
        this.makeMove(m);
        // Eger yedigimiz kare karsilik saldirisi altinda degilse bedavadir
        if (!this.isSquareAttacked(m.to, 'b')) {
          this.undoMove();
          return {
            move: m,
            text: `Harika bir av! ${this.squareToAlgebraic(m.to).toUpperCase()} karesindeki korumasız ${this.getPieceNameTr(m.captured)} taşını alabilirsin! 🎯`
          };
        }
        this.undoMove();
      }
    }

    // En iyi hamleyi bul (Minimax d=2)
    const best = this.minimax(2, -Infinity, Infinity, true);
    if (best && best.move) {
      const m = best.move;
      const pieceName = this.getPieceNameTr(m.piece);
      const toName = this.squareToAlgebraic(m.to).toUpperCase();
      return {
        move: m,
        text: `Maskotun fısıldıyor: ${pieceName} taşını ${toName} karesine getirmek tahtadaki gücünü çok artırır! 🌟`
      };
    }

    return {
      move: legalMoves[0],
      text: "Taşlarını güvenli ve merkeze yakın karelere ilerletmeye ne dersin? 🦄"
    };
  }

  getPieceNameTr(piece) {
    if (!piece) return '';
    const map = {
      P: 'Piyon', N: 'At', B: 'Fil', R: 'Kale', Q: 'Vezir', K: 'Şah',
      p: 'piyon', n: 'at', b: 'fil', r: 'kale', q: 'vezir', k: 'şah'
    };
    return map[piece] || 'Taş';
  }
}

if (typeof module !== 'undefined') {
  module.exports = ChessEngine;
}
