import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
  );
  const db = client.db();
  const worksCollection = db.collection('works');
  
  try {
    const works = await worksCollection.find().toArray();
    client.close();
    
    res.status(200).json(works.map(work => ({
      title: work.title,
      images: JSON.parse(JSON.stringify(work.images)),
      shortDescription: work.shortDescription,
      id: work._id.toString(),
    })));
  } catch (error) {
    client.close();
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
