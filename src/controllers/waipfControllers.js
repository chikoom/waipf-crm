import mongoose from 'mongoose';
import { SubscirptionSchema } from  '../models/waipfModel';

// Creating a new subscription model using our subscription schema
const Subscription = mongoose.model('Subscription', SubscirptionSchema);

// Exporting the function for adding new subscription 
export const addNewSubscription = (req, res) => {
    // Transfering the request body to our subscription model
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