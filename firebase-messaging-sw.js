/* firebase-messaging-sw.js
 * Must live at the ROOT of your GitHub Pages site (same folder as
 * index.html) — Firebase's default messaging setup expects it there.
 *
 * This handles notifications that arrive while the app ISN'T open
 * (the browser/OS runs this script in the background). Notifications
 * that arrive while the app IS open are handled directly in
 * index.html instead.
 *
 * IMPORTANT: the firebaseConfig object below must be filled in with
 * the EXACT SAME values as FIREBASE_CONFIG in index.html — this file
 * runs separately (as a service worker) and can't read variables
 * from the page, so the config has to be duplicated here.
 */

importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBTQ4aj5RN5pw3bbXlvYVPotgDqxNIRCDY",
  authDomain: "web-portal-4778d.firebaseapp.com",
  projectId: "web-portal-4778d",
  storageBucket: "web-portal-4778d.firebasestorage.app",
  messagingSenderId: "723506440029",
  appId: "1:723506440029:web:b1b607456f46b6c7092ab4",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var title = (payload.notification && payload.notification.title) || "मण्डलीको कार्यक्रम";
  var options = {
    body: (payload.notification && payload.notification.body) || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
  };
  self.registration.showNotification(title, options);
});
