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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8842b2fcaba2baf76c10.js"
  },
  {
    "url": "app-6f32ee265bcc218f4dbd.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8b7f24833b88c22aebc7.js"
  },
  {
    "url": "index.html",
    "revision": "848e9ce81a94c457ac41d5125c00f439"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "514ae0441930c9b0a6e6094666f400a7"
  },
  {
    "url": "styles.b00845138d3b271ad850.css"
  },
  {
    "url": "component---src-pages-index-tsx-394d5926dd494b260c80.js"
  },
  {
    "url": "2-f232b572239c4b9ecd0b.js"
  },
  {
    "url": "1-8c5a3332e245f9ffa570.js"
  },
  {
    "url": "styles-e395501700314ea73ec2.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5b926d70d877fc4dae237b903c77e1f2"
  },
  {
    "url": "component---src-pages-404-tsx-65e79f1d7bfc6ca528f4.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b2eb885337963089c52fc424d98568f6"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "91b392099427f3d0b77bff49d5dfb085"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ce957a39b3d0ab57ba96ecfb36aea2b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});