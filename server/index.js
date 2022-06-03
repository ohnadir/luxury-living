const express = require('express')
const cors = require('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.wqn9d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({message: 'UnAuthorization Access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send({message: 'Forbidden Access'})
        }
        req.decoded = decoded;
        next();
    })
}


async function run() {
    try {
        await client.connect();
        const serviceCollection = client.db("luxury-living").collection("service");
        const projectCollection = client.db("luxury-living").collection("projects");
        const reviewsCollection = client.db("luxury-living").collection("reviews");
        const usersCollection = client.db("luxury-living").collection("users");

        // get all services from database
        app.get('/services', verifyToken, async (req, res) => {
            const services = await serviceCollection.find().toArray();
            res.send(services);
        });

        // get all services from database
        app.get('/services/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await serviceCollection.findOne(query);
            res.send(result);
            
        });

        //  delete a single service 
        app.delete('/services/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const result = await serviceCollection.deleteOne(filter);
            res.send(result);
           
        });

        // post a single services on database
        app.post('/services', async (req, res) => {
            const service = req.body;
            const services = await serviceCollection.insertOne(service);
            res.send(services);
        });

        // get all projects from database
        app.get('/projects', verifyToken, async (req, res) => {
            const projects = await projectCollection.find().toArray();
            res.send(projects);
        });
        
        // get all reviews from database
        app.get('/reviews', verifyToken, async (req, res) => {
            const reviews = await reviewsCollection.find().toArray();
            res.send(reviews);
        });

        // post a single review on database
        app.post('/reviews', async (req, res) => {
            const review = req.body;
            const result = await reviewsCollection.insertOne(review);
            res.send(result);
            
        });

        // post all user to database 
        app.put('/users/:email', async (req, res) => {
            const email = req.params.email;
            const user = req.body;
            const filter = { email: email };
            const options = { upsert: true };
            const updatedDoc = {
                $set: user,
            }
            const result = await usersCollection.updateOne(filter, updatedDoc, options);
            const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN);
            res.send( {result, token});
        })

        // get all users from database
        app.get('/users', verifyToken, async (req, res) => {
            const users = await usersCollection.find().toArray();
            res.send(users);
        });

        // get single from database
        app.get('/users/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await usersCollection.findOne(query);
            res.send(result);
        });

        // delete single data from usersCollection
        app.delete('/users/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(filter);
            res.send(result);
            console.log('Connected from Delete');
        })
    }
    finally {
        
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Luxury Living')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})