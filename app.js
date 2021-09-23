const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oxeqo.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 8080 || process.env.PORT;


client.connect(err => {
    const collection = client.db(`${process.env.DATABASE_NAME}`).collection(`${process.env.DATABASE_COLLECTION_NAME}`);
    console.log('Database connected');

    app.get('/', (req, res) => {
        res.send('Hello from db it is working');
    })

    // Database POST
    app.post('/sendMessage', (req, res) => {
        const message = req.body;
        collection.insertOne(message)
            .then((result) => {
                console.log(result);
                res.send(result.insertedCount > 0);
            })
        console.log(message);
    })
});


app.listen(PORT, () => {
    console.log(`Listening on ${PORT} is running`);
})