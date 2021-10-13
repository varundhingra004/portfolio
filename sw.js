var cacheName = 'portfolio-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/mdev.html',
    '/compvis.html',
    'style.css',
    'images/copyright.png',
    'images/fb_profile.jpeg',
    'images/logo.png',
    'images/linked_icon.png',
    'js/main.js',
    'sw.js'
]

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
        return cache.addAll(filesToCache);
        })
    )
});

// self.addEventListener('fetch', function(e){
//     e.respondWith(
//         caches.match(e.request).then(function(response){
//         return response || fetch(e.request);
//         })
//     )
// });

self.addEventListener('fetch', function(e){
    e.respondwith(
        caches.match(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    )
});