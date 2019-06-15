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
    "url": "webpack-runtime-ff4f07c96cce12f584e4.js"
  },
  {
    "url": "app-ed51245d46b56d1ec079.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8b7f24833b88c22aebc7.js"
  },
  {
    "url": "index.html",
    "revision": "9c797492577d226d3fc17ca597db1d84"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0bb0c60a08c5e127524e6da57ded05bd"
  },
  {
    "url": "styles.3c7ab68879a4ff1d684a.css"
  },
  {
    "url": "component---src-pages-index-tsx-394d5926dd494b260c80.js"
  },
  {
    "url": "2-159a173d03019d7cc14e.js"
  },
  {
    "url": "1-8c5a3332e245f9ffa570.js"
  },
  {
    "url": "styles-e395501700314ea73ec2.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "50048638776f93ad9d62aa56cbc6b77f"
  },
  {
    "url": "component---src-pages-404-tsx-0c8b97bf8d3fafbafc01.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "eb622259e7f61111d2f5cfa85ee3650e"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "1efd6568b710785d1ea854515624b7dd"
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