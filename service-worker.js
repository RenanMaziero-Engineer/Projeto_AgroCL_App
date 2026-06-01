const CACHE = 'app-v1';
const FILES = [
  '/src/paginaInicial/index.html',
  '/src/paginaInicial/inicial.css',

  '/src/paginaCalculos/calculos.html',
  '/src/paginaCalculos/calculos.css',

  '/src/paginaGramas/G_Hectares.html',
  '/src/paginaGramas/G_Hectares.css',
  '/src/paginaGramas/G_Litros.html',
  '/src/paginaGramas/G_Litros.css',
  '/src/paginaGramas/index.js',

  '/src/paginalInformações/informacoes.html',
  '/src/paginalInformações/informacoes.css',

  '/src/paginaLitros/L_Hectares.html',
  '/src/paginaLitros/L_Hectares.css',
  '/src/paginaLitros/L_Litros.html',
  '/src/paginaLitros/L_Litros.css',
  '/src/paginaLitros/index.js',

  '/src/paginaML/ML_Hectares.html',
  '/src/paginaML/ML_Hectares.css',
  '/src/paginaML/ML_Litros.html',
  '/src/paginaML/ML_Litros.css',
  '/src/paginaML/index.js',

  '/src/paginaQuilos/Q_Hectares.html',
  '/src/paginaQuilos/Q_Hectares.css',
  '/src/paginaQuilos/Q_Litros.html',
  '/src/paginaQuilos/Q_Litros.css',
  '/src/paginaQuilos/index.js',
];

// Instala e faz cache de todos os arquivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Serve do cache quando offline, busca na rede quando online
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});