const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8081
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@shimulclaster1.85diumq.mongodb.net/?retryWrites=true&w=majority`;

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
        await client.connect();
        const database = client.db("coffeeHeavenDB");
        const coffees = database.collection("coffees");

        app.get('/coffees', async (req, res) => {
            // const coffess = req.body
            const allCoffee = await coffees.find().toArray();
            res.send(allCoffee)

        })
        app.get('/coffees/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const coffee = await coffees.findOne(query);
            res.send(coffee);

        })

        app.post('/coffees', async (req, res) => {
            const coffee = req.body;
            const result = await coffees.insertOne(coffee);
            res.send(result);
        })

        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) };
            const result = await coffees.deleteOne(query);
            res.send(result);
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server running at :${port}`)
})