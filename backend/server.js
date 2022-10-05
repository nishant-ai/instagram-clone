import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";
import posts from './models.js';

// App Config
const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(
    'mongodb+srv://instagram_clone:igItsInstagram101@cluster0.6zzwfkx.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("Mongo Says Hi! 👋🏻");
})

// API routes
app.get('/', (req, res) => res.status(200).send("Hello World"))

app.post('/upload', (req, res) => {

    console.log("<POST>")

    const body = req.body;

    posts.create(body, (err, data) => {
        if (err) res.status(500).send(err);
        else res.status(201).send(data);
    });
    console.log("</POST>")
});

app.get('/sync', (req, res) => {
    posts.find((err, data) => {
        if (err) res.status(500).send(err);
        else res.status(201).send(data);
    });
});

// Server Listen
app.listen(PORT, () => {
    console.log(`app listening @PORT:${PORT}`);
})
