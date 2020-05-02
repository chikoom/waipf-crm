import {
    addNewSubscription,
    getSubscription,
    getSubscriptionWithID,
    updateSubscriptionWithID,
    deleteSubscriptionWithID
} from '../controllers/waipfControllers'

import {
  registerController,
  loginController,
  checkLoginStatusController
} from '../controllers/userControllers'

// Receive app from index and pass it to our route function
const routes = (app) => {

    app.route('/subscription')

        .get((req, res, next) => {
            //Middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, checkLoginStatusController, getSubscription)

        // Post endpoint
        .post(checkLoginStatusController, addNewSubscription);


    app.route('/subscription/:subscriptionID')
    
        // Get specific contact
        .get(checkLoginStatusController, getSubscriptionWithID)
        // Updating specific contact
        .put(checkLoginStatusController, updateSubscriptionWithID)
        // Deleting specific contact
        .delete(checkLoginStatusController, deleteSubscriptionWithID);

    app.route('/auth/register')
        .post(registerController);
    
    app.route('/auth/login')
        .post(loginController);
}

// Exporting our routes to be used in other places
export default routes;