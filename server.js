import express from 'express';
import rootIndex from './routes/rootIndex.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', rootIndex)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});