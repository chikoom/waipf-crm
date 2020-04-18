import express from 'express';
import routes from './src/routes/waipfRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


// Initiate the express server app
const app = express();
// The port use for comunication
const PORT = 4000;
// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WAIPFdb',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser setup and connection to express
// Allowing bosy-parser to parse our request to a readable fromat by our API
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Passing the express app to our routes
routes(app);

// Creating the basic default route
app.get('/', (req, res) =>
    res.send(`Node&Express running on port ${PORT}`)
);

// Telling Express server to listen on our communication port
app.listen(PORT, () => 
    console.log(`Server running! PORT ${PORT}`)
);