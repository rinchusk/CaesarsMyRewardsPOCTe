importScripts("/precache-manifest.7aa167bd89bee8815a05e4fdcc16d87e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");


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



