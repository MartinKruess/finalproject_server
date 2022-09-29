import mongoose from 'mongoose';

export const schemaSettings = {
    reqString: {
        type: String,
        required: true,
    },
    string: {
        type: String,
    },
    reqNumber: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
    },
    bool: {
        type: Boolean,
    },
    array: {
        type: Array,
    },
    sizes: {
        w: { type: Number },
        h: { type: Number },
        d: { type: Number },
    },
    /* 
    removed the company id, have to be set directly in the the schema itself 
    companyID: {
        type: 
    } */
};
