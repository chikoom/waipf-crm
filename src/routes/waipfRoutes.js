import {
    addNewSubscription,
    getSubscription,
    getSubscriptionWithID,
    updateSubscriptionWithID,
    deleteSubscriptionWithID
} from '../controllers/waipfControllers'

// Receive app from index and pass it to our route function
const routes = (app) => {

    app.route('/subscription')

        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, getSubscription)

        // Post endpoint
        .post(addNewSubscription);


        app.route('/subscription/:subscriptionID')
        // Get specific contact
        .get(getSubscriptionWithID)
        // Updating specific contact
        .put(updateSubscriptionWithID)
        // Deleting specific contact
        .delete(deleteSubscriptionWithID);
}

// Exporting our routes to be used in other places
export default routes;