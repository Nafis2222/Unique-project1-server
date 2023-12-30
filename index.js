const express = require('express')
const app = express()


const cors = require('cors')


const port = process.env.PORT || 5000


// unique-project1
// IPtaOaxopfb7QunG

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://unique-project1:IPtaOaxopfb7QunG@cluster0.e9gq9mr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const databese = client.db('Unique-project1').collection('post')

    app.post('/post' , async(req,res)=>{
      const user = req.body
      const result = await databese.insertOne(user)
      res.send(result)
      console.log(result)
    })

    app.get('/post', async(req,res)=>{
      const result = await databese.find().toArray()
      res.send(result)
    })

    app.get('/post/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await databese.findOne(query)
      res.send(result)
    })

    app.get('/post/:id', async(req,res)=>{
      const id = res.params.id 
      const data = req.body
      const filter = { _id: new ObjectId(id) };
      const result = await databese.updateOne(filter)
      res.send(result)

    })



    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.get('/', (req,res)=>{
    res.send('crud is running')
})

app.listen((port), (req,res)=>{
    console.log(`My simple crud is running on ${port}`)
})