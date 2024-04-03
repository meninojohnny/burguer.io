const staticDevCoffee = "burguer-io-pwa-v1"
const assets = [
  "/",
  "/index.html",
  "/item-details.html",
  "/confirm-order.html",
  "/style.css",
  "/app.js",
  "assets/images/burguer-logo.png",
  "assets/images/double-x.jpeg",
  "assets/images/o-burguer-x.jpg",
  "assets/images/x-bacon.jpg",
  "assets/images/x-burguer.jpg",
  "assets/images/x-futuro.jpg",
  "assets/images/x-salada.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})