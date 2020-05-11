importScripts("precache-manifest.1413658a458b29cf1e9f65e0101f020a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


console.log('Service worker Loaded ');
workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('push', e => {
    console.log('Inside Push ');
const data =  e.data.json();
//const data =  e.data;
console.log('Push Received15 ');
console.log(data);
    /* self.registration.showNotification(data.title,{
        body : " Sucess "
    }); */
    self.registration.showNotification(data.data.title,{
        body : " Sucess "
    });
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());



