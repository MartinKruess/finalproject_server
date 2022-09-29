import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const mainboardSchema = mongoose.Schema({
    baseData: basicArticleData,
    form: schemaSettings.string,
    socket: schemaSettings.string,
    maxCPU: schemaSettings.number,
    supportedCPU: schemaSettings.array,
    chipset: schemaSettings.string,
    PCIx16: schemaSettings.string,
    powerSupply: schemaSettings.string,
    maxStorage: schemaSettings.number,
    ramSocket: schemaSettings.string,
    ramType: schemaSettings.string,
    supportedRam: schemaSettings.string,
    channels: schemaSettings.number,
    ramRanks: schemaSettings.number,
    onboardGPU: schemaSettings.string,
    extern: {
        USB: schemaSettings.string,
        VGA: schemaSettings.number,
        HDMI: schemaSettings.number,
        DVI: schemaSettings.number,
        dp: schemaSettings.number,
        mic: schemaSettings.number,
        opticalAudio: schemaSettings.number,
        RJ45: schemaSettings.number,
    },
    intern: {
        SATA: schemaSettings.number,
        M2: schemaSettings.number,
        M2Key: schemaSettings.string,
        M2Port: schemaSettings.string,
        M2Lenght: schemaSettings.string,
        rgbExtern: schemaSettings.number,
        rgbIntern: schemaSettings.string,
        caseFan: schemaSettings.number,
    },
    info: schemaSettings.string,
});
export const ArticleMainboardModel = mongoose.model(
    'mainboardCol',
    mainboardSchema
);
