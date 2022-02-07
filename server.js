import express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const uri = process.env.DB;

const client = new MongoClient(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

client.connect(async (err) => {
console.log('Connected to MongoDB');
});

app.get('/favorite', async (req, res) => {
const collection = client.db('RickMorty').collection('favorites');
const allFlights = await collection.find({}).toArray();
res.send(allFlights);
});

app.post('/addFavorite', async (req, res) => {
const body = req.body;
const collection = client.db('RickMorty').collection('favorites');
const result = await collection.insertOne(body);
res.send(result);
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
}); 