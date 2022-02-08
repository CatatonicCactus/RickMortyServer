import RMCharacter from '../models/favSchema.js';



export const favList = async (req, res) => {
    const collection = await RMCharacter.find();
    res.send(collection);
  };

export const addFavorite = async (req, res) => {
    const body = req.body;
    await RMCharacter.create(body);
    res.send('created');
  };


