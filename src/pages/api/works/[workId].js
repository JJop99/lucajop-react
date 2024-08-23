// api/works/[workId].js
import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const { workId } = req.query;
  const client = await MongoClient.connect(
    "mongodb+srv://JJop99:Jacopo99@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
  );
  const db = client.db();
  const worksCollection = db.collection("works");
  const selectedWork = await worksCollection.findOne({
    _id: ObjectId(workId),
  });

  client.close();

  if (!selectedWork) {
    return res.status(404).json({ message: "Work not found" });
  }

  res.status(200).json({
    id: selectedWork._id.toString(),
    title: selectedWork.title,
    images: JSON.parse(JSON.stringify(selectedWork.images)),
    shortDescription: selectedWork.shortDescription,
    description: selectedWork.description,
  });
}
