self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('voxwit-v1').then((cache) => cache.addAll([
      '/',
      '/manifest.webmanifest',
      '/og.png',
      '/favicon.ico',
    ]))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  event.respondWith(
    caches.match(request).then((cached) =>
      cached || fetch(request).then((response) => {
        const copy = response.clone();
        caches.open('voxwit-v1').then((cache) => cache.put(request, copy));
        return response;
      }).catch(() => cached)
    )
  );
});
