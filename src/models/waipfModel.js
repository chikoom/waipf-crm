import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const SubscirptionSchema = new Schema({
    companyName:{
        type: String,
        required: 'Please enter the company name'
    },
    description:{
        type: String
    },
    subscriptionType:{
        type: Number,
        required: 'Please choose the subscrition type'
    },
    cost:{
        type: Number,
        required: 'Please enter the subscription cost',
        set: v => Math.round((v + Number.EPSILON) * 100) / 100
    },
    currency:{
        type: Number,
        required: 'Please select the currency'
    },
    paymentDate:{
        type: Date,
        required: 'Please choose the payment date'
    },
    billingCycle:{
        type: Number,
        required: 'Please choose the billing cycle'
    },
    autoRenew:{
        type: Boolean,
        required: 'Please select if the billing is auto renewing'
    }
    
})