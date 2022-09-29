import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const cpuSchema = mongoose.Schema({
    baseData: basicArticleData,
    cpuTyp: schemaSettings.string,
    form: schemaSettings.string,
    socket: schemaSettings.number,
    pci: schemaSettings.string,
    coreName: schemaSettings.string,
    cores: schemaSettings.number,
    threads: schemaSettings.number,
    coretype: schemaSettings.string,
    frequenz: schemaSettings.string,
    unlocked: schemaSettings.bool,
    boxed: schemaSettings.bool,
    architecture: schemaSettings.string,
    cache: schemaSettings.string,
    fan: schemaSettings.string,
    channels: schemaSettings.number,
    ramSupport: schemaSettings.string,
    onboardGPU: schemaSettings.string,
    tdp: schemaSettings.number,
    info: schemaSettings.string,
});
export const ArticleCpuModel = mongoose.model('cpuCol', cpuSchema);
