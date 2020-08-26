/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.901b5f91de6daec1cc1eca5e4b393cf4.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
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
