import mongoose from 'mongoose';
import { SubscirptionSchema } from  '../models/waipfModel';

// Creating a new subscription model using our subscription schema
const Subscription = mongoose.model('Subscription', SubscirptionSchema);

// Function for ADDING NEW subscription 
export const addNewSubscription = (req, res) => {
    // Transfering the request body to our subscription model for creating new entry
    let newSubscription = new Subscription(req.body);

    // Saving our subscription to DB 
    newSubscription.save((err, subscription) => {
        // If theres an error, send it back
        // Else send the json object back
        if(err) {
            res.send(err)
        }
        res.json(subscription);
    });
}


// Function for GETTING ALL subscriptions
export const getSubscription = (req, res) => {

    // Lokking for the subscription in the db
    Subscription.find({}, (err, subscription) => {
        // If theres an error, send it back
        // Else send the json object back
        if(err) {
            res.send(err)
        }
        res.json(subscription);
    });
}


// Function for GETTING A SINGLE subscription
export const getSubscriptionWithID = (req, res) => {

    // Lokking for the subscriptionID in the db
    Subscription.findById(req.params.subscriptionID, (err, subscription) => {
        // If theres an error, send it back
        // Else send the json object back
        if(err) {
            res.send(err)
        }
        res.json(subscription);
    });
}


// Function for UPDATING a single subscription
export const updateSubscriptionWithID = (req, res) => {

    // Lokking for the subscriptionID in the db
    Subscription.findOneAndUpdate(  {_id: req.params.subscriptionID}, 
                                    req.body, 
                                    { new: true, useFindAndModify: false }, 
                                    (err, subscription) => {
        // If theres an error, send it back
        // Else send the json object back
        if(err) {
            res.send(err)
        }
        res.json(subscription);
    });
}



// Function for DELETING a single subscription
export const deleteSubscriptionWithID = (req, res) => {

    // Lokking for the subscriptionID in the db
    Subscription.remove(  {_id: req.params.subscriptionID}, (err, subscription) => {
        // If theres an error, send it back
        // Else send the json object back
        if(err) {
            res.send(err)
        }
        res.json({ message: "Deleted Subscription OK"});
    });
}