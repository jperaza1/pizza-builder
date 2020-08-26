const CACHE_STATIC_NAME = "static-v1";

self.addEventListener("install", (e) => {
  console.log("Service Worker Installing");
});

self.addEventListener("fetch", (e) => {
  if (e.request.url.startsWith("https") || e.request.url.startsWith("http")) {
    const response = caches.match(e.request).then((res) => {
      if (res) return res;

      // No existe el archivo
      // Tengo que ir a la web

      return fetch(e.request).then((newResp) => {
        caches.open(CACHE_STATIC_NAME).then((cache) => {
          cache.put(e.request, newResp);
        });
        return newResp.clone();
      });
    });

    e.respondWith(response);
  }

  console.log(`intercenting ${e.request.method} to ${e.request.url}`);
});
