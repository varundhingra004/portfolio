var cacheName = 'portfolio-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/mdev.html',
    '/compvis.html',
    'css/style.css',
    'images/copyright.png',
    'images/fb_profile.jpeg',
    'images/logo.png'
]

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
        return response || fetch(e.request);
        })
    );
});