import { MongoClient } from 'mongodb';

const uri = process.env.DB;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

client.connect(async (err) => {
    console.log('Connected to MongoDB');
  });

export const favList = async (req, res) => {
    const collection = client.db('RickMorty').collection('favorites');
    const allFlights = await collection.find({}).toArray();
    res.send(allFlights);
  };

export const addFavorite = async (req, res) => {
    const body = req.body;
    const collection = client.db('RickMorty').collection('favorites');
    const result = await collection.insertOne(body);
    res.send(result);
  };
