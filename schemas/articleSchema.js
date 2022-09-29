import { mongoose } from 'mongoose';
import { caseSchema } from './articleSchemas/caseSchema.js';
import { cpuSchema } from './articleSchemas/cpuSchema.js';
import { GrakaSchema } from './articleSchemas/gpuSchema.js';
import { mainboardSchema } from './articleSchemas/mainboardSchema.js';
import { multimediaCableSchema } from './articleSchemas/multimediaCableSchema.js';
import { powerAdapterSchema } from './articleSchemas/powerAdapterSchema.js';
import { ramSchema } from './articleSchemas/ramSchema.js';
import { screenSchema } from './articleSchemas/screenSchema.js';
import { soundCardSchema } from './articleSchemas/soundCardSchema.js';
import { storageSchema } from './articleSchemas/storageSchema.js';

export const ArticleDataModel1 = mongoose.model('articleDB', {
    caseSchema,
    cpuSchema,
    GrakaSchema,
    mainboardSchema,
    multimediaCableSchema,
    powerAdapterSchema,
    ramSchema,
    screenSchema,
    soundCardSchema,
    storageSchema,
});

export const ArticleDataModel2 = mongoose.model('caseCol', caseSchema);
