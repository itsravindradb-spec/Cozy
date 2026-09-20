// Minimal service worker — required for "Add to Home Screen" / installability.
// Intentionally does NOT cache anything, so the app always loads the latest
// data from your Google Sheet instead of showing stale offline content.

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Pass everything straight through to the network.
  e.respondWith(fetch(e.request));
});
