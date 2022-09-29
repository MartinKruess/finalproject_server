import { mongoose } from 'mongoose';
import { schemaSettings } from './schemaSettings.js';

export const basicArticleData = mongoose.Schema({
    articleNr: schemaSettings.reqNumber,
    type: schemaSettings.string,
    producerNr: schemaSettings.string,
    company: schemaSettings.companyID,
    priceEK: schemaSettings.number,
    priceVK: schemaSettings.number,
    counter: {
        stock: schemaSettings.reqNumber,
        clickcounter: schemaSettings.number,
        purchases: schemaSettings.number,
        rating: schemaSettings.number,
        ratingAvg: schemaSettings.number,
    },
    comments: schemaSettings.array,
});
