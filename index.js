import express from 'express';
import routes from './src/routes/waipfRoutes';

// Initiate the express server app
const app = express();
// The port use for comunication
const PORT = 4000;

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