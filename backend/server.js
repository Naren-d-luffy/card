import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

async function fetchData(req, res) {
  try {
    await client.connect();
    const database = client.db('card');
    const collection = database.collection('color');
    const data = await collection.findOne();
    res.json(data);
  } finally {
    await client.close();
  }
}

async function updateColor(req, res) {
  const { color } = req.body;
  try {
    await client.connect();
    const database = client.db('card');
    const collection = database.collection('color');

    const filter = { _id: new ObjectId("6718f54e19e34d485ae9bea5") };
    const updateDoc = { $set: { color: color } };

    const result = await collection.updateOne(filter, updateDoc);
    res.json({ message: 'Color updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update color', error });
  } finally {
    await client.close();
  }
}


async function updateData(req, res) {
  const { business, name, designation, mobile, email, address, color } = req.body; // Destructure all fields sent in the request body
  try {
    await client.connect();
    const database = client.db('card');
    const collection = database.collection('color');

    const filter = { _id: new ObjectId("6718f54e19e34d485ae9bea5") }; 
    const updateDoc = {
      $set: {
        business: business,
        name: name,
        designation: designation,
        mobile: mobile,
        email: email,
        address: address,
        color: color 
      },
    };

    const result = await collection.updateOne(filter, updateDoc);
    res.json({ message: 'Data updated successfully', result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update data', error });
  } finally {
    await client.close();
  }
}

app.get('/api/color', fetchData);
app.patch('/api/color', updateColor); 
app.patch('/api/data', updateData);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
