import mongoose from 'mongoose'
import { basicArticleData } from '../basicData&Settings/basicArticleData'
import { schemaSettings } from '../basicData&Settings/schemaSettings'

export const usbStickSchema = mongoose.Schema({
    baseData: basicArticleData,
    version: schemaSettings.number,
    capacity: schemaSettings.number,
    Umdrehung: schemaSettings.number,
    cache: schemaSettings.number,
    maxPowerConsumption: schemaSettings.number,
    shockResistance: schemaSettings.number,
})
export const ArticleUsbStickModel = mongoose.model(
    'usbStickCol',
    usbStickSchema
)
