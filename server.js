// server.js
const express = require('express');
const path = require('path');

const app = express();

// если используешь Nginx как reverse proxy:
app.set('trust proxy', true);

// Раздаём статические файлы из папки ./public
app.use(express.static(path.join(__dirname, 'public')));

// Быстрый health-check
app.get('/health', (req, res) => res.status(200).send('ok'));

// Слушаем ТОЛЬКО localhost (за Nginx)
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
