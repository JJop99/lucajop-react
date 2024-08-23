const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;  // Usa una porta diversa da quella del client React

app.use(cors()); // Abilita CORS per tutte le origini

// Endpoint per ottenere tutti i lavori
app.get('/api/works', async (req, res) => {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://JJop99:Jacopo99@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
    );
    const db = client.db();
    const worksCollection = db.collection("works");
    const works = await worksCollection.find().toArray();
    client.close();
    
    res.status(200).json(works.map((work) => ({
      title: work.title,
      images: JSON.parse(JSON.stringify(work.images)),
      shortDescription: work.shortDescription,
      id: work._id.toString(),
    })));
  } catch (error) {
    console.error("Error fetching works:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Endpoint per ottenere i dettagli di un lavoro specifico
app.get('/api/works/:workId', async (req, res) => {
  const workId = req.params.workId;
  console.log(`Fetching work with ID: ${workId}`);
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://JJop99:Jacopo99@cluster0.kajhjck.mongodb.net/works?retryWrites=true&w=majority"
    );
    const db = client.db();
    const worksCollection = db.collection('works');
    const selectedWork = await worksCollection.findOne({ _id: new ObjectId(workId) });
    console.log(`Selected work: ${JSON.stringify(selectedWork)}`);
    client.close();

    if (selectedWork) {
      res.status(200).json({
        id: selectedWork._id.toString(),
        title: selectedWork.title,
        images: JSON.parse(JSON.stringify(selectedWork.images)),
        shortDescription: selectedWork.shortDescription,
        description: selectedWork.description,
      });
    } else {
      res.status(404).json({ message: 'Work not found' });
    }
  } catch (error) {
    console.error('Error fetching work details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
