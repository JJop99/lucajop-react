// api/works/index.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://JJop99:Jacopo99@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
  );
  const db = client.db();
  const worksCollection = db.collection("works");
  const works = await worksCollection.find({}, { _id: 1 }).toArray();

  client.close();

  res.status(200).json(works.map((work) => ({
    id: work._id.toString(),
  })));
}
