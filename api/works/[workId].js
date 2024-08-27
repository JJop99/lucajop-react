import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const urlParts = req.url.split('/');
  const workId = urlParts[urlParts.length - 1]; // Assicurati che l'ID sia l'ultimo elemento
  

  if (!workId || !ObjectId.isValid(workId)) {
    return res.status(400).json({ message: 'Invalid work ID' });
  }

  const client = await MongoClient.connect(
    "mongodb+srv://JJop99:Jacopo99@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
  );

  try {
    const db = client.db();
    const worksCollection = db.collection('works');

    const selectedWork = await worksCollection.findOne({
      _id: new ObjectId(workId),
    });

    if (!selectedWork) {
      return res.status(404).json({ message: 'Work not found' });
    }

    res.status(200).json({
      id: selectedWork._id.toString(),
      title: selectedWork.title,
      images: selectedWork.images,
      shortDescription: selectedWork.shortDescription,
      description: selectedWork.description,
    });
  } catch (error) {
    console.error('Error fetching work:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    client.close();
  }
}
