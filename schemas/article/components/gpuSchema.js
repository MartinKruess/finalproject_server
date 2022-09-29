import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const GrakaSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.sizes,
    height: schemaSettings.number,
    gpu: schemaSettings.string,
    chip: schemaSettings.string,
    gpuFrequenz: schemaSettings.number,
    OcModeBoost: schemaSettings.number,
    GamingModeBoost: schemaSettings.number,
    shaderUnits: schemaSettings.number,
    storage: schemaSettings.number,
    saveClock: schemaSettings.number,
    type: schemaSettings.string,
    storageConnection: schemaSettings.number,
    brandwidth: schemaSettings.number,
    slot: schemaSettings.string,
    DisplayPort: schemaSettings.number,
    HDMI: schemaSettings.number,
    powerSupply: schemaSettings.string,
    TDP: schemaSettings.number,
    recommended: schemaSettings.string,
    features: schemaSettings.string,
});
export const ArticleGpuModel = mongoose.model('gpuCol', gpuSchema);
