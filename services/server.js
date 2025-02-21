const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // 🔹 Esto permite recibir JSON correctamente

const routes = require('../routes/routes');
app.use('/api', routes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
