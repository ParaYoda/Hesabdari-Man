const CACHE_NAME = 'hesabdari-v1';
const urlsToCache = ['/Hesabdari-Man/', '/Hesabdari-Man/index.html', '/Hesabdari-Man/manifest.json', '/Hesabdari-Man/icon-192.png', '/Hesabdari-Man/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
