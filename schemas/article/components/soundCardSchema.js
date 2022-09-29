import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const soundCardSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.sizes,
    color: schemaSettings.string,
    soundchip: schemaSettings.string,
    powerConnection: schemaSettings.string,
    maxChannel: schemaSettings.number,
    maxPlaybackQuality: schemaSettings.string,
    maxRecordingQuality: schemaSettings.string,
    lineIn: {
        opticIn: schemaSettings.string,
        microIn: schemaSettings.string,
        jackIn: schemaSettings.number,
        boxLink: schemaSettings.number,
    },
    lineOut: {
        opticOut: schemaSettings.string,
        jackOut: schemaSettings.number,
    },
    delivery: {
        controlBox: schemaSettings.number,
        adapter: schemaSettings.string,
        linkCable: schemaSettings.number,
        operationManual: schemaSettings.bool,
    },
});
export const ArticleSoundCardModel = mongoose.model(
    'soundCardCol',
    soundCardSchema
);
