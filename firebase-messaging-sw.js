// Importa los scripts de Firebase
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging.js');

// Configuración de Firebase (igual que tu app)
firebase.initializeApp({
  apiKey: "AIzaSyDREj0G-DWR3-fdCWUak3fYI5fErcgDyg",
  authDomain: "bancoecologico-2e66f.firebaseapp.com",
  projectId: "bancoecologico-2e66f",
  storageBucket: "bancoecologico-2e66f.firebasestorage.app",
  messagingSenderId: "339091724410",
  appId: "1:339091724410:web:e56b46c90e0914996083c3"
});

const messaging = firebase.messaging();

// Maneja notificaciones push en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title || "Banco Ecológico 🌿";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo/left.png',
    // Reproducir sonido
    data: { url: '/' }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});