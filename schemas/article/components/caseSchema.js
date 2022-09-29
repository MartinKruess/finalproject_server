import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const caseSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.sizes,
    color: schemaSettings.string,
    material: schemaSettings.string,
    form: schemaSettings.string,
    fans: {
        front: schemaSettings.number,
        side: schemaSettings.number,
        top: schemaSettings.number,
        back: schemaSettings.number,
        bottom: schemaSettings.number,
    },
    filters: {
        front: schemaSettings.bool,
        side: schemaSettings.bool,
        top: schemaSettings.bool,
        back: schemaSettings.bool,
        bottom: schemaSettings.bool,
    },
    drive: {
        zoll25: schemaSettings.number,
        zoll35: schemaSettings.number,
    },
    powerSupply: schemaSettings.string,
    bonusSlots: schemaSettings.string,
    usb: {
        front: schemaSettings.string,
        back: schemaSettings.string,
    },
    audioConnection: schemaSettings.string,
    maxLenghtGraka: schemaSettings.number,
    maxHeightCPU: schemaSettings.number,
    delivery: {
        tower: schemaSettings.string,
        fans: schemaSettings.string,
        powerSupply: schemaSettings.string,
        warranty: schemaSettings.string,
    },
});
export const ArticleCaseModel = mongoose.model('caseCol', caseSchema);
