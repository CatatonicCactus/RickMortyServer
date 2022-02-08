import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const favSchema = new Schema({
    Name: {
        required: true,
        type: String
    },
    Status: {
        required: true,
        type: String
    },
    Species: {
        required: true,
        type: String
    },
    Origin: {
        required: true,
        type: String
    },
    Image: {
        required: true,
        type: String
    }
})
const RMCharacter = model('RMCharacter', favSchema, 'RickMorty');
export default RMCharacter;