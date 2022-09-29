import mongoose from 'mongoose';
import { basicArticleData } from '../basicData&Settings/basicArticleData.js';
import { schemaSettings } from '../basicData&Settings/schemaSettings.js';

export const screenSchema = mongoose.Schema({
    baseData: basicArticleData,
    size: schemaSettings.sizes,
    wight: schemaSettings.number,
    color: schemaSettings.string,
    ergonomics: {
        tilt: schemaSettings.string,
        swivel: schemaSettings.bool,
        pivot: schemaSettings.bool,
    },
    heightAdjustable: schemaSettings.number,
    vesaMount: schemaSettings.number,
    Display: {
        screenSize: schemaSettings.number,
        aspectration: schemaSettings.number,
        radiusCurvation: schemaSettings.number,
    },
    panelType: schemaSettings.string,
    background: schemaSettings.string,
    nativeResulute: {
        width: schemaSettings.number,
        height: schemaSettings.number,
    },
    repeatFrequenz: schemaSettings.number,
    reactionTime: schemaSettings.number,
    adaptiveSync: schemaSettings.string,
    brightness: schemaSettings.number,
    contrast: {
        kind: schemaSettings.string,
        relation: schemaSettings.number,
    },
    hdr: bool,
    colorsOut: schemaSettings.string,
    colorSpectrum: schemaSettings.string,
    viewingAngle: schemaSettings.string,
    connection: {
        DisplayPort: schemaSettings.number,
        HDMI: schemaSettings.number,
        lineOut: schemaSettings.string,
        boxes: schemaSettings.string,
    },
    delivery: {
        monitor: schemaSettings.string,
        stand: schemaSettings.bool,
        wallMount: schemaSettings.bool,
        cables: {
            powerCord: schemaSettings.bool,
            display: schemaSettings.string,
        },
        warranty: schemaSettings.string,
    },
});
export const ArticleScreenModel = mongoose.model('screenCol', screenSchema);
