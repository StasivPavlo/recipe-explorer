import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipeRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', recipeRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 