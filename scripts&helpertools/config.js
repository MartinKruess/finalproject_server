import dotenv from 'dotenv';
const env = dotenv.config();

export const envConfig = {
    BASE_URL: process.env.BASE_URL,
    MODE: process.env.MODE,
    FRONTEND_URL: process.env.FRONTEND_URL,

    DB_MONGO_URL: process.env.DB_MONGO_URL,

    // LOGIN oAuth (Google)
    APP_ACCESS_TOKEN: process.env.APP_ACCESS_TOKEN,
    GOOGLE_OAUTH_REDIRECT: process.env.GOOGLE_OAUTH_REDIRECT,

    // LOGIN Auth
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,

    // Paymentsystems
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_SECRET: process.env.PAYPAL_SECRET,
    KLARNA_CLIENT_ID: process.env.KLARNA_CLIENT_ID,
    KLARNA_SECRET: process.env.KLARNA_SECRET,
    GOOGLEPAY_CLIENT_ID: process.env.GOOGLEPAY_CLIENT_ID,
    GOOGLEPAY_SECRET: process.env.GOOGLEPAY_SECRET,
    SWIFT_CLIENT_ID: process.env.SWIFT_CLIENT_ID,
    SWIFT_SECRET: process.env.SWIFT_SECRET,

    // Datenstorage (images)
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
};
