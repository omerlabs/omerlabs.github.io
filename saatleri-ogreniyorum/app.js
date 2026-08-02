/* ==========================================================================
   Saati Öğreniyorum - Main Application Logic (Vanilla JS)
   ========================================================================== */

(function () {
  'use strict';

  // Level Question Targets: Level 1: 5, Level 2: 10, Level 3: 15, Level 4: 20
  const LEVEL_TARGETS = { 1: 5, 2: 10, 3: 15, 4: 20 };
  const STORAGE_KEY = 'saatleri_ogreniyorum_data_v1';

  let state = {
    stars: 0,
    unlockedLevel: 1,
    currentLevel: 1,
    currentMode: 1,
    levelProgress1: 0,
    levelProgress2: 0,
    totalCorrect: 0,
    totalAttempts: 0,
    soundEnabled: true
  };

  let lastQuestionKey1 = '';
  let lastQuestionKey2 = '';

  // Track last ticked time to ensure sound ONLY plays when time actually steps
  let lastSoundMinute = -1;
  let lastSoundHour = -1;

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.stars = parsed.stars || 0;
        state.unlockedLevel = parsed.unlockedLevel || 1;
        state.totalCorrect = parsed.totalCorrect || 0;
        state.totalAttempts = parsed.totalAttempts || 0;
        state.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : true;
      }
    } catch (e) {
      console.warn('Storage parse error:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        stars: state.stars,
        unlockedLevel: state.unlockedLevel,
        totalCorrect: state.totalCorrect,
        totalAttempts: state.totalAttempts,
        soundEnabled: state.soundEnabled
      }));
    } catch (e) {
      console.warn('Storage save error:', e);
    }
  }

  // ==========================================
  // WEB AUDIO SYNTHESIZER (Clean Mechanical Ticks)
  // ==========================================
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    if (type === 'tick') {
      // Soft, ultra-clean mechanical woodblock tick (no buzz/crackle)
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.02);
    } else if (type === 'correct') {
      // Upbeat 3-note harmonic chime (C5 -> E5 -> G5)
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = now + idx * 0.09;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.22);
      });
    } else if (type === 'level_up') {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = now + idx * 0.11;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.3);
      });
    } else if (type === 'wrong') {
      // Gentle soft low double-bloop
      [220, 196].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = now + idx * 0.12;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.14);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.14);
      });
    }
  }

  // ==========================================
  // DOM ELEMENT REFERENCES
  // ==========================================
  const screens = {
    menu: document.getElementById('screen-menu'),
    levels: document.getElementById('screen-levels'),
    mode1: document.getElementById('screen-mode-1'),
    mode2: document.getElementById('screen-mode-2')
  };

  const btnNavBack = document.getElementById('btn-nav-back');
  const btnSoundToggle = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  const starCountEl = document.getElementById('star-count');
  const btnInstall = document.getElementById('btn-install');

  const mascotAvatar = document.getElementById('mascot-avatar');
  const mascotSpeech = document.getElementById('mascot-speech');

  // Modals
  const modalHelp = document.getElementById('modal-help');
  const modalStats = document.getElementById('modal-stats');
  const modalIosGuide = document.getElementById('modal-ios-guide');

  // Mode 1 Elements
  const mode1LevelPill = document.getElementById('mode1-level-pill');
  const mode1StreakEl = document.getElementById('mode1-streak');
  const mode1TargetDigital = document.getElementById('mode1-target-digital');
  const mode1CurrentVal = document.getElementById('mode1-current-val');
  const mode1Feedback = document.getElementById('mode1-feedback');
  const btnMode1Check = document.getElementById('btn-mode1-check');
  const btnMode1Next = document.getElementById('btn-mode1-next');
  const svgClockInteractive = document.getElementById('interactive-clock');

  // Mode 2 Elements
  const mode2LevelPill = document.getElementById('mode2-level-pill');
  const mode2StreakEl = document.getElementById('mode2-streak');
  const mode2Feedback = document.getElementById('mode2-feedback');
  const choiceButtonsGrid = document.getElementById('choice-buttons-grid');
  const btnMode2Next = document.getElementById('btn-mode2-next');

  // ==========================================
  // GAME ENGINE STATE
  // ==========================================
  let activeQuestion = {
    targetHour: 3,
    targetMinute: 0,
    currentHour: 12,
    currentMinute: 0,
    prevMinuteDeg: 0,
    options: []
  };

  let isDraggingMinute = false;
  let isDraggingHour = false;

  // ==========================================
  // CLOCK SVG GENERATION HELPERS
  // ==========================================
  function renderClockFace(ticksGroup, numbersGroup) {
    ticksGroup.innerHTML = '';
    numbersGroup.innerHTML = '';

    for (let i = 0; i < 60; i++) {
      const angle = i * 6 * (Math.PI / 180);
      const isHourTick = i % 5 === 0;
      const innerR = isHourTick ? 150 : 160;
      const outerR = 168;

      const x1 = 200 + innerR * Math.sin(angle);
      const y1 = 200 - innerR * Math.cos(angle);
      const x2 = 200 + outerR * Math.sin(angle);
      const y2 = 200 - outerR * Math.cos(angle);

      const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      tick.setAttribute('x1', x1);
      tick.setAttribute('y1', y1);
      tick.setAttribute('x2', x2);
      tick.setAttribute('y2', y2);
      tick.setAttribute('stroke', isHourTick ? '#2F3542' : '#A4B0BE');
      tick.setAttribute('stroke-width', isHourTick ? '5' : '2');
      tick.setAttribute('stroke-linecap', 'round');
      ticksGroup.appendChild(tick);
    }

    for (let h = 1; h <= 12; h++) {
      const angle = h * 30 * (Math.PI / 180);
      const r = 136;
      const x = 200 + r * Math.sin(angle);
      const y = 200 - r * Math.cos(angle);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y + 8);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-family', "'Fredoka', sans-serif");
      text.setAttribute('font-size', '26');
      text.setAttribute('font-weight', '700');
      text.setAttribute('fill', '#2F3542');
      text.textContent = h;
      numbersGroup.appendChild(text);
    }
  }

  renderClockFace(
    document.getElementById('clock-ticks'),
    document.getElementById('clock-numbers')
  );
  renderClockFace(
    document.getElementById('display-clock-ticks'),
    document.getElementById('display-clock-numbers')
  );

  function updateHandPositions(clockType, hour, minute) {
    const minDeg = minute * 6;
    const hourDeg = ((hour % 12) * 30) + (minute * 0.5);

    if (clockType === 'interactive') {
      const hourHandLine = document.getElementById('hand-hour');
      const minHandLine = document.getElementById('hand-minute');
      const hourHandleCircle = document.querySelector('#group-hour-hand circle');
      const minHandleCircle = document.querySelector('#group-minute-hand circle');

      const hRad = (hourDeg - 90) * (Math.PI / 180);
      const hx = 200 + 95 * Math.cos(hRad);
      const hy = 200 + 95 * Math.sin(hRad);
      hourHandLine.setAttribute('x2', hx);
      hourHandLine.setAttribute('y2', hy);
      if (hourHandleCircle) {
        hourHandleCircle.setAttribute('cx', hx);
        hourHandleCircle.setAttribute('cy', hy);
      }

      const mRad = (minDeg - 90) * (Math.PI / 180);
      const mx = 200 + 145 * Math.cos(mRad);
      const my = 200 + 145 * Math.sin(mRad);
      minHandLine.setAttribute('x2', mx);
      minHandLine.setAttribute('y2', my);
      if (minHandleCircle) {
        minHandleCircle.setAttribute('cx', mx);
        minHandleCircle.setAttribute('cy', my);
      }

      mode1CurrentVal.textContent = formatTime(hour, minute);
    } else if (clockType === 'display') {
      const hourHandLine = document.getElementById('display-hand-hour');
      const minHandLine = document.getElementById('display-hand-minute');

      const hRad = (hourDeg - 90) * (Math.PI / 180);
      hourHandLine.setAttribute('x2', 200 + 95 * Math.cos(hRad));
      hourHandLine.setAttribute('y2', 200 + 95 * Math.sin(hRad));

      const mRad = (minDeg - 90) * (Math.PI / 180);
      minHandLine.setAttribute('x2', 200 + 145 * Math.cos(mRad));
      minHandLine.setAttribute('y2', 200 + 145 * Math.sin(mRad));
    }
  }

  function formatTime(h, m) {
    const displayH = h === 0 ? 12 : h;
    const hh = String(displayH).padStart(2, '0');
    const mm = String(m).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  // ==========================================
  // INTERACTIVE CLOCK DRAGGING & SNAPPING
  // ==========================================
  function getSVGPoint(svg, clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 400;
    const y = ((clientY - rect.top) / rect.height) * 400;
    return { x, y };
  }

  function getAngleFromCenter(x, y) {
    const dx = x - 200;
    const dy = y - 200;
    let rad = Math.atan2(dy, dx);
    let deg = rad * (180 / Math.PI) + 90;
    if (deg < 0) deg += 360;
    return deg;
  }

  function snapMinute(rawMinute, level) {
    if (level === 1) {
      return 0;
    } else if (level === 2) {
      return rawMinute >= 15 && rawMinute < 45 ? 30 : 0;
    } else if (level === 3) {
      const intervals = [0, 15, 30, 45, 60];
      const closest = intervals.reduce((prev, curr) =>
        Math.abs(curr - rawMinute) < Math.abs(prev - rawMinute) ? curr : prev
      );
      return closest === 60 ? 0 : closest;
    } else {
      let stepped = Math.round(rawMinute / 5) * 5;
      return stepped === 60 ? 0 : stepped;
    }
  }

  function startDrag(e) {
    const pt = getSVGPoint(
      svgClockInteractive,
      e.touches ? e.touches[0].clientX : e.clientX,
      e.touches ? e.touches[0].clientY : e.clientY
    );

    const dist = Math.hypot(pt.x - 200, pt.y - 200);
    if (dist > 185) return;

    if (dist > 110) {
      isDraggingMinute = true;
      isDraggingHour = false;
    } else {
      isDraggingHour = true;
      isDraggingMinute = false;
    }

    activeQuestion.prevMinuteDeg = activeQuestion.currentMinute * 6;
    lastSoundMinute = activeQuestion.currentMinute;
    lastSoundHour = activeQuestion.currentHour;
    handleMove(e);
  }

  function handleMove(e) {
    if (!isDraggingMinute && !isDraggingHour) return;
    e.preventDefault();

    const pt = getSVGPoint(
      svgClockInteractive,
      e.touches ? e.touches[0].clientX : e.clientX,
      e.touches ? e.touches[0].clientY : e.clientY
    );

    const currentDeg = getAngleFromCenter(pt.x, pt.y);

    if (isDraggingMinute) {
      const prevDeg = activeQuestion.prevMinuteDeg;
      if (prevDeg > 300 && currentDeg < 60) {
        activeQuestion.currentHour = (activeQuestion.currentHour % 12) + 1;
      } else if (prevDeg < 60 && currentDeg > 300) {
        activeQuestion.currentHour = activeQuestion.currentHour === 1 ? 12 : activeQuestion.currentHour - 1;
      }
      activeQuestion.prevMinuteDeg = currentDeg;

      const rawMin = (currentDeg / 6) % 60;
      activeQuestion.currentMinute = snapMinute(rawMin, state.currentLevel);

    } else if (isDraggingHour) {
      const rawHour = Math.floor(currentDeg / 30);
      let hourVal = rawHour === 0 ? 12 : rawHour;
      activeQuestion.currentHour = hourVal;
    }

    // Play tick sound ONLY when the snapped minute or hour actually changes
    if (activeQuestion.currentMinute !== lastSoundMinute || activeQuestion.currentHour !== lastSoundHour) {
      playSound('tick');
      lastSoundMinute = activeQuestion.currentMinute;
      lastSoundHour = activeQuestion.currentHour;
    }

    updateHandPositions('interactive', activeQuestion.currentHour, activeQuestion.currentMinute);
  }

  function stopDrag() {
    isDraggingMinute = false;
    isDraggingHour = false;
  }

  svgClockInteractive.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', stopDrag);

  svgClockInteractive.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', handleMove, { passive: false });
  window.addEventListener('touchend', stopDrag);

  // ==========================================
  // RANDOM NON-REPEATING QUESTION GENERATOR
  // ==========================================
  function generateQuestion(level, mode) {
    const lastKey = mode === 1 ? lastQuestionKey1 : lastQuestionKey2;
    let hour = 1;
    let minute = 0;
    let key = '';

    for (let attempt = 0; attempt < 50; attempt++) {
      hour = Math.floor(Math.random() * 12) + 1;

      if (level === 1) {
        minute = 0;
      } else if (level === 2) {
        minute = Math.random() < 0.5 ? 0 : 30;
      } else if (level === 3) {
        const mins = [0, 15, 30, 45];
        minute = mins[Math.floor(Math.random() * mins.length)];
      } else {
        const mins = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        minute = mins[Math.floor(Math.random() * mins.length)];
      }

      key = formatTime(hour, minute);
      if (key !== lastKey) break;
    }

    if (mode === 1) lastQuestionKey1 = key;
    else lastQuestionKey2 = key;

    return { hour, minute };
  }

  function generateDistractors(targetHour, targetMinute, level) {
    const correctStr = formatTime(targetHour, targetMinute);
    const options = new Set([correctStr]);

    if (targetMinute % 5 === 0) {
      const swappedHour = targetMinute / 5 === 0 ? 12 : Math.round(targetMinute / 5);
      const swappedMinute = (targetHour % 12) * 5;
      const swappedStr = formatTime(swappedHour, swappedMinute);
      if (swappedStr !== correctStr) options.add(swappedStr);
    }

    const hNext = targetHour === 12 ? 1 : targetHour + 1;
    const hPrev = targetHour === 1 ? 12 : targetHour - 1;
    options.add(formatTime(hNext, targetMinute));
    options.add(formatTime(hPrev, targetMinute));

    if (targetMinute > 0) {
      const mirrorMin = (60 - targetMinute) % 60;
      options.add(formatTime(targetHour, mirrorMin));
    }

    const requiredCount = (level <= 2) ? 2 : 4;
    while (options.size < requiredCount) {
      const randQ = generateQuestion(level, 2);
      const randStr = formatTime(randQ.hour, randQ.minute);
      options.add(randStr);
    }

    const arr = Array.from(options).slice(0, requiredCount);
    return arr.sort(() => Math.random() - 0.5);
  }

  // ==========================================
  // GAME FLOW - MODE 1: SAATİ KUR
  // ==========================================
  function setupMode1() {
    state.currentMode = 1;
    const maxTarget = LEVEL_TARGETS[state.currentLevel];

    mode1LevelPill.textContent = getLevelLabel(state.currentLevel);
    mode1StreakEl.textContent = `${state.levelProgress1}/${maxTarget}`;

    const q = generateQuestion(state.currentLevel, 1);
    activeQuestion.targetHour = q.hour;
    activeQuestion.targetMinute = q.minute;

    activeQuestion.currentHour = 12;
    activeQuestion.currentMinute = 0;
    updateHandPositions('interactive', 12, 0);

    const targetFormatted = formatTime(q.hour, q.minute);
    mode1TargetDigital.textContent = targetFormatted; // Clean time readout only

    mode1Feedback.textContent = '';
    mode1Feedback.className = 'feedback-msg';

    btnMode1Check.classList.remove('hidden');
    btnMode1Next.classList.add('hidden');

    setMascotSpeech('İbreleri çevir ve saati ayarla! 🕒');
  }

  function checkMode1() {
    state.totalAttempts++;
    const maxTarget = LEVEL_TARGETS[state.currentLevel];

    const isCorrect = (activeQuestion.currentHour % 12 === activeQuestion.targetHour % 12) &&
                      (activeQuestion.currentMinute === activeQuestion.targetMinute);

    if (isCorrect) {
      state.stars++;
      state.totalCorrect++;
      state.levelProgress1++;
      starCountEl.textContent = state.stars;
      mode1StreakEl.textContent = `${state.levelProgress1}/${maxTarget}`;

      btnMode1Check.classList.add('hidden');

      if (state.levelProgress1 >= maxTarget) {
        handleLevelCompletion(1);
      } else {
        playSound('correct');
        mode1Feedback.textContent = 'Harika! Doğru buldun! 🎉';
        mode1Feedback.className = 'feedback-msg correct';
        triggerMascotCelebrate('Aferin sana! Çok zekisin! 🌟');
        btnMode1Next.classList.remove('hidden');
      }

      saveState();

    } else {
      playSound('wrong');
      mode1Feedback.textContent = 'Neredeyse! Tekrar dene 💪';
      mode1Feedback.className = 'feedback-msg wrong';
      setMascotSpeech('Hadi bir daha dene! 💪');
      saveState();
    }
  }

  // ==========================================
  // GAME FLOW - MODE 2: DOĞRU SAATİ BUL
  // ==========================================
  function setupMode2() {
    state.currentMode = 2;
    const maxTarget = LEVEL_TARGETS[state.currentLevel];

    mode2LevelPill.textContent = getLevelLabel(state.currentLevel);
    mode2StreakEl.textContent = `${state.levelProgress2}/${maxTarget}`;

    const q = generateQuestion(state.currentLevel, 2);
    activeQuestion.targetHour = q.hour;
    activeQuestion.targetMinute = q.minute;

    updateHandPositions('display', q.hour, q.minute);

    const choices = generateDistractors(q.hour, q.minute, state.currentLevel);
    activeQuestion.options = choices;

    choiceButtonsGrid.innerHTML = '';
    choices.forEach(optStr => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice';
      btn.textContent = optStr;
      btn.addEventListener('click', () => handleChoiceSelect(btn, optStr));
      choiceButtonsGrid.appendChild(btn);
    });

    mode2Feedback.textContent = '';
    mode2Feedback.className = 'feedback-msg';
    btnMode2Next.classList.add('hidden');

    setMascotSpeech('Doğru cevaba tıkla! 🧐');
  }

  function handleChoiceSelect(selectedBtn, chosenStr) {
    const allBtns = choiceButtonsGrid.querySelectorAll('.btn-choice');
    allBtns.forEach(b => b.disabled = true);

    state.totalAttempts++;
    const maxTarget = LEVEL_TARGETS[state.currentLevel];
    const targetStr = formatTime(activeQuestion.targetHour, activeQuestion.targetMinute);
    const isCorrect = chosenStr === targetStr;

    if (isCorrect) {
      selectedBtn.classList.add('selected-correct');
      state.stars++;
      state.totalCorrect++;
      state.levelProgress2++;
      starCountEl.textContent = state.stars;
      mode2StreakEl.textContent = `${state.levelProgress2}/${maxTarget}`;

      if (state.levelProgress2 >= maxTarget) {
        handleLevelCompletion(2);
      } else {
        playSound('correct');
        mode2Feedback.textContent = 'Tebrikler! Çok hızlısın! 🎉';
        mode2Feedback.className = 'feedback-msg correct';
        triggerMascotCelebrate('Muhteşemsin! ⭐');
        btnMode2Next.classList.remove('hidden');
      }

      saveState();

    } else {
      selectedBtn.classList.add('selected-wrong');
      allBtns.forEach(b => {
        if (b.textContent === targetStr) {
          b.classList.add('selected-correct');
        }
      });

      playSound('wrong');
      mode2Feedback.textContent = `Doğru cevap ${targetStr} olmalıydı. 💛`;
      mode2Feedback.className = 'feedback-msg wrong';
      setMascotSpeech('Bir sonraki soruda bulacaksın! 💪');
      btnMode2Next.classList.remove('hidden');
      saveState();
    }
  }

  function handleLevelCompletion(mode) {
    playSound('level_up');
    const oldLevel = state.currentLevel;

    if (oldLevel < 4) {
      const nextLevel = oldLevel + 1;
      state.unlockedLevel = Math.max(state.unlockedLevel, nextLevel);
      state.currentLevel = nextLevel;

      if (mode === 1) state.levelProgress1 = 0;
      else state.levelProgress2 = 0;

      updateLevelCardsUI();
      saveState();

      const msg = `🎉 TEBRİKLER! Seviye ${oldLevel} tamamlandı! Seviye ${nextLevel} başladı! 🚀`;
      if (mode === 1) {
        mode1Feedback.textContent = msg;
        mode1Feedback.className = 'feedback-msg correct';
        btnMode1Next.textContent = `Seviye ${nextLevel}'e Geç 🚀`;
        btnMode1Next.classList.remove('hidden');
      } else {
        mode2Feedback.textContent = msg;
        mode2Feedback.className = 'feedback-msg correct';
        btnMode2Next.textContent = `Seviye ${nextLevel}'e Geç 🚀`;
        btnMode2Next.classList.remove('hidden');
      }
      triggerMascotCelebrate(`Seviye ${nextLevel}'e geçtik! ⭐`);

    } else {
      if (mode === 1) state.levelProgress1 = 0;
      else state.levelProgress2 = 0;

      saveState();
      const winMsg = '🏆 MUHTEŞEM! Tüm seviyeleri tamamladın! ⭐';
      if (mode === 1) {
        mode1Feedback.textContent = winMsg;
        mode1Feedback.className = 'feedback-msg correct';
        btnMode1Next.textContent = 'Yeni Sorular İle Devam Et 🔄';
        btnMode1Next.classList.remove('hidden');
      } else {
        mode2Feedback.textContent = winMsg;
        mode2Feedback.className = 'feedback-msg correct';
        btnMode2Next.textContent = 'Yeni Sorular İle Devam Et 🔄';
        btnMode2Next.classList.remove('hidden');
      }
      triggerMascotCelebrate('Sen tam bir şampiyonsun! 🏆');
    }
  }

  function getLevelLabel(lvl) {
    const labels = {
      1: 'Seviye 1 (5 Soru) ☀️',
      2: 'Seviye 2 (10 Soru) 🌈',
      3: 'Seviye 3 (15 Soru) 🌙',
      4: 'Seviye 4 (20 Soru) ⭐'
    };
    return labels[lvl] || `Seviye ${lvl}`;
  }

  // ==========================================
  // UI NAVIGATION
  // ==========================================
  function showScreen(targetScreenId) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[targetScreenId].classList.add('active');

    if (targetScreenId === 'menu') {
      btnNavBack.classList.add('hidden');
      setMascotSpeech('Merhaba! Saatleri öğrenelim mi? 🌟');
    } else {
      btnNavBack.classList.remove('hidden');
    }
  }

  function updateLevelCardsUI() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
      const lvl = parseInt(card.getAttribute('data-level'), 10);
      const statusEl = document.getElementById(`lvl-status-${lvl}`);

      if (lvl <= state.unlockedLevel) {
        card.classList.remove('locked');
        card.classList.add('unlocked');
        if (statusEl) statusEl.textContent = 'Açık ✅';
      } else {
        card.classList.remove('unlocked');
        card.classList.add('locked');
        if (statusEl) statusEl.textContent = '🔒 Kilitli';
      }
    });
  }

  function setMascotSpeech(text) {
    if (mascotSpeech) mascotSpeech.textContent = text;
  }

  function triggerMascotCelebrate(speechText) {
    setMascotSpeech(speechText);
    if (mascotAvatar) {
      mascotAvatar.classList.add('celebrate');
      setTimeout(() => mascotAvatar.classList.remove('celebrate'), 1500);
    }
  }

  // ==========================================
  // EVENT LISTENERS
  // ==========================================
  document.getElementById('btn-start-mode-1').addEventListener('click', () => {
    playSound('tick');
    state.currentMode = 1;
    updateLevelCardsUI();
    showScreen('levels');
  });

  document.getElementById('btn-start-mode-2').addEventListener('click', () => {
    playSound('tick');
    state.currentMode = 2;
    updateLevelCardsUI();
    showScreen('levels');
  });

  document.querySelectorAll('.level-card').forEach(card => {
    card.addEventListener('click', () => {
      const lvl = parseInt(card.getAttribute('data-level'), 10);
      if (lvl > state.unlockedLevel) {
        playSound('wrong');
        alert(`Bu seviyeyi açmak için Seviye ${lvl - 1}'deki soruları tamamlamalısın! 🔒`);
        return;
      }

      playSound('tick');
      state.currentLevel = lvl;

      if (state.currentMode === 1) {
        state.levelProgress1 = 0;
        btnMode1Next.textContent = 'Sonraki Soru ➡️';
        setupMode1();
        showScreen('mode1');
      } else {
        state.levelProgress2 = 0;
        btnMode2Next.textContent = 'Sonraki Soru ➡️';
        setupMode2();
        showScreen('mode2');
      }
    });
  });

  btnNavBack.addEventListener('click', () => {
    playSound('tick');
    showScreen('menu');
  });

  btnMode1Check.addEventListener('click', checkMode1);
  btnMode1Next.addEventListener('click', () => {
    playSound('tick');
    btnMode1Next.textContent = 'Sonraki Soru ➡️';
    setupMode1();
  });

  btnMode2Next.addEventListener('click', () => {
    playSound('tick');
    btnMode2Next.textContent = 'Sonraki Soru ➡️';
    setupMode2();
  });

  btnSoundToggle.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    saveState();
    if (state.soundEnabled) playSound('tick');
  });

  document.getElementById('btn-open-help').addEventListener('click', () => {
    playSound('tick');
    modalHelp.classList.remove('hidden');
  });
  document.getElementById('btn-close-help').addEventListener('click', () => modalHelp.classList.add('hidden'));
  document.getElementById('btn-ok-help').addEventListener('click', () => modalHelp.classList.add('hidden'));

  document.getElementById('btn-open-stats').addEventListener('click', () => {
    playSound('tick');
    document.getElementById('stat-total-stars').textContent = state.stars;
    document.getElementById('stat-unlocked-level').textContent = `${state.unlockedLevel}/4`;
    document.getElementById('stat-correct-count').textContent = state.totalCorrect;
    document.getElementById('stat-attempt-count').textContent = state.totalAttempts;

    const acc = state.totalAttempts > 0 ? Math.round((state.totalCorrect / state.totalAttempts) * 100) : 100;
    document.getElementById('stat-accuracy').textContent = `%${acc}`;

    modalStats.classList.remove('hidden');
  });
  document.getElementById('btn-close-stats').addEventListener('click', () => modalStats.classList.add('hidden'));

  document.getElementById('btn-reset-progress').addEventListener('click', () => {
    if (confirm('Tüm ilerlemeni ve yıldızlarını sıfırlamak istediğine emin misin?')) {
      state.stars = 0;
      state.unlockedLevel = 1;
      state.totalCorrect = 0;
      state.totalAttempts = 0;
      state.levelProgress1 = 0;
      state.levelProgress2 = 0;
      starCountEl.textContent = 0;
      saveState();
      updateLevelCardsUI();
      modalStats.classList.add('hidden');
      alert('İlerleme sıfırlandı.');
    }
  });

  // ==========================================
  // PWA INSTALLATION & SERVICE WORKER LOGIC
  // ==========================================
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnInstall.classList.remove('hidden');
  });

  btnInstall.addEventListener('click', async () => {
    playSound('tick');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      modalIosGuide.classList.remove('hidden');
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        btnInstall.classList.add('hidden');
      }
      deferredPrompt = null;
    } else {
      alert('Uygulama zaten yüklü veya tarayıcınız PWA yüklemeyi şu an desteklemiyor.');
    }
  });

  document.getElementById('btn-close-ios').addEventListener('click', () => modalIosGuide.classList.add('hidden'));
  document.getElementById('btn-ok-ios').addEventListener('click', () => modalIosGuide.classList.add('hidden'));

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('ServiceWorker registered:', reg.scope))
        .catch((err) => console.warn('ServiceWorker error:', err));
    });
  }

  function init() {
    loadState();
    starCountEl.textContent = state.stars;
    soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    updateLevelCardsUI();
    showScreen('menu');
  }

  init();
})();
