import {addNewSubscription} from '../controllers/waipfControllers'

// Receive app from index and pass it to our route function
const routes = (app) => {

    app.route('/subscription')

        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send("GET request seccessful")
        })

        .post(addNewSubscription);


        app.route('/subscription/:subscriptionID')

        .put((req, res) => 
        res.send("PUT request seccessful"))

        .delete((req, res) => 
        res.send("DELETE request seccessful"));
}

// Exporting our routes to be used in other places
export default routes;