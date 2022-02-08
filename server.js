// Rick & Morty
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import favListRouter from './routes/favList.js';
import addFavRouter from './routes/RouterAddFav.js';

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  Credentials: true,
  optionsSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors(corsOptions));
app.use(express.json());

app.use(favListRouter);

app.use(addFavRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
