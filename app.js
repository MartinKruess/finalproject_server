import express from 'express';
import cors from 'cors';
import './db/mongo-connect.js';
//import { loginRouter, registerRouter } from './controllerRoutes/userControllerRoute.js';
import { loginController } from './controller/loginController.js';
import { registerController } from './controller/registerController.js';


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>This is just a test!</h1>');
});

app.use('/login', loginController);
app.use('/register', registerController);

app.use((req, res, next) => {
    res.status(404).json;
});
