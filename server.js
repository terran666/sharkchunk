// server.js
const express = require('express');
const path = require('path');

const app = express();

// Раздаём статические файлы из папки ./public
app.use(express.static(path.join(__dirname, 'public')));

// Быстрый health-check (по желанию)
app.get('/health', (req, res) => res.status(200).send('ok'));

// Слушаем на всех интерфейсах (важно для доступа извне)
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

