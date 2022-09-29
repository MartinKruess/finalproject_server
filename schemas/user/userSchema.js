import mongoose from 'mongoose';
import { schemaSettings } from '../article/basicData&Settings/schemaSettings.js';

const userSchema = mongoose.Schema({
    mail: schemaSettings.reqString,
    username: schemaSettings.reqString,
    password: schemaSettings.reqString,
    group: schemaSettings.string,
    status: { Boolean, default: false },
    order: {
        invoice: schemaSettings.array,
        articles: schemaSettings.array,
    },
    sex: schemaSettings.string,
    firstname: schemaSettings.string,
    lastname: schemaSettings.string,
    address: {
        street: schemaSettings.string,
        nr: schemaSettings.number,
        zip: schemaSettings.number,
        city: schemaSettings.string,
        country: schemaSettings.string,
    },
    payment: {
        method: schemaSettings.string,
        iban: schemaSettings.string,
        bank: schemaSettings.string,
        sepa: schemaSettings.bool,
    },
    company: {
        name: schemaSettings.reqString,
        form: schemaSettings.string,
        hra: schemaSettings.number,
        tax: schemaSettings.number,
    },
    wishlist: schemaSettings.array,
    newsletter: schemaSettings.bool,
});

export const UserDataModel = mongoose.model('users', userSchema);
