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
    "url": "webpack-runtime-1f2814337cfb020660dc.js"
  },
  {
    "url": "app-b9c07acb9ae451e8e0f1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8b7f24833b88c22aebc7.js"
  },
  {
    "url": "index.html",
    "revision": "23a9051baa8b4e3d4e8031f0564af5cb"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "330a6f47b047cdd5d37972107ec0e8b9"
  },
  {
    "url": "styles.b00845138d3b271ad850.css"
  },
  {
    "url": "component---src-pages-index-tsx-6878da4c9554498247b7.js"
  },
  {
    "url": "2-0278ca6cbe8676e449fe.js"
  },
  {
    "url": "1-8c5a3332e245f9ffa570.js"
  },
  {
    "url": "styles-e395501700314ea73ec2.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7421ec04e0891393571df73b175c6778"
  },
  {
    "url": "component---src-pages-404-tsx-721c9f57727a23e47c7f.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "6924dae55e852e22f4e0aca02fc34b43"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "e82d4f16dcaa7a75667eed3669dfdb64"
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