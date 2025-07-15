import express from 'express';
import rootIndex from './routes/rootIndex.js';
import productsRouter from './routes/products.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', rootIndex);
app.use('/', authRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});