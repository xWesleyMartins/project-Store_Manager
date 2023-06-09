const express = require('express');
const productRoutes = require('./routes/product.routes');
const salesRoutes = require('./routes/sales.routes');
// const Connection = require('./models/connection');

const app = express();
app.use(express.json());

app.use('/products', productRoutes);
app.use('/sales', salesRoutes);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;