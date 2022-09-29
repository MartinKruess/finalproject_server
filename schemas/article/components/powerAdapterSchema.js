import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const powerAdapterSchema = mongoose.Schema({
    baseData: basicArticleData,
    zoll: schemaSettings.number,
    capacity: schemaSettings.number,
    Umdrehung: schemaSettings.number,
    cache: schemaSettings.number,
    maxPowerConsumption: schemaSettings.number,
    shockResistance: schemaSettings.number,
});
export const ArticlePowerAdapterModel = mongoose.model(
    'powerAdapterCol',
    powerAdapterSchema
);
