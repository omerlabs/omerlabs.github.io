const CACHE_NAME = 'kpss-notlarim-cache-v1';
const OFFLINE_FALLBACK_URL = 'offline.html';

const ASSETS_TO_PRECACHE = [
  'index.html',
  'all-notes.html',
  'offline.html',
  'assets/style.css',
  'assets/search.js',
  'assets/search-index.json',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png'
];

// Helper to determine the path root (useful if hosted in a subdirectory like /kpss-notlarim/)
function getRelativePath(url) {
  const scope = self.registration.scope;
  const relative = url.replace(scope, '');
  return relative;
}

// Installation: Pre-cache the application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching app shell');
      return cache.addAll(ASSETS_TO_PRECACHE);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activation: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetching: Stale-While-Revalidate strategy with offline fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Skip handling browser extensions or external APIs (e.g. google fonts is handled differently or can be cached)
  if (!event.request.url.startsWith(self.location.origin)) {
    // For external fonts, we can cache them dynamically using cache-first
    if (event.request.url.includes('fonts.googleapis.com') || event.request.url.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return fetch(event.request).then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
      );
    }
    return;
  }

  // Stale-While-Revalidate caching policy
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update the cache with the fresh response
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((err) => {
            console.log('[Service Worker] Fetch failed; returning cached resource if available.', err);
            // If network fails and no cached response exists, show the offline fallback page for HTML requests
            if (!cachedResponse && event.request.headers.get('accept').includes('text/html')) {
              return cache.match(OFFLINE_FALLBACK_URL);
            }
            throw err;
          });

        // Return the cached response immediately if it exists, otherwise wait for the network response
        return cachedResponse || fetchPromise;
      });
    })
  );
});
