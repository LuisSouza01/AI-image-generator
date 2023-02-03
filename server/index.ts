import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect';
import postRoutes from './routes/postRoutes';
import aiImageGeneratorRoutes from './routes/aiImageGeneratorRoutes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/aiimagegenerator', aiImageGeneratorRoutes);

app.get("/", async(req: Request, res: Response) => {
  res.send('Hello World!');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL ?? '');
    app.listen(8181, () => console.log('Server has started on port http://localhost:8181/'));
  } catch (error) {
    console.log(error);
  }
};

startServer();