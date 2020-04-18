import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const SubscirptionSchema = new Schema({
    companyName:{
        type: String,
        required: 'Please enter the company name'
    },
    description:{
        type: String,
        default: '',
    },
    subscriptionType:{
        type: Number,
        default: 0
    },
    cost:{
        type: Number,
        required: 'Please enter the subscription cost',
        set: v => Math.round((v + Number.EPSILON) * 100) / 100
    },
    currency:{
        type: Number,
        default: 0
    },
    paymentDate:{
        type: Date,
        default: Date.now
    },
    billingCycle:{
        type: Number,
        default: 0
    },
    autoRenew:{
        type: Boolean,
        default: 0
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
    
})