import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsonwebtoken, { decode } from 'jsonwebtoken';
import User from './src/models/userModel';
import routes from './src/routes/waipfRoutes';


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

// JWT setup
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});


// Passing the express app to our routes
routes(app);

// Creating the basic default route
app.get('/', (req, res) =>
    res.send(`Node&Express running on port ${PORT}`)
);

// Serving static files
app.use(express.static('public/imgs'));

// Telling Express server to listen on our communication port
app.listen(PORT, () => 
    console.log(`Server running! PORT ${PORT}`)
);