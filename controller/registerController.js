import { UserDataModel } from '../schemas/user/userSchema.js';
import bcrypt from 'bcrypt';

export const registerController = async (req, res) => {
    const saltRounds = 10;
    try {
        console.log('controller:', req.body);
        const hashPW = await bcrypt.hash(req.body.password, saltRounds);
        
        //SAVE: userData to userDB
        if (req.body.userGroupe === 'company') {
            
            const dataOfCompany = {
                mail: req.body.email,
                company: {name: req.body.company},
                username: req.body.contactPerson,
                password: hashPW,
                group: req.body.userGroupe,
            };
            console.log('company reg:', dataOfCompany);
            UserDataModel(dataOfCompany).save();
            res.send('Successfull registrated!');
        } else {
            console.log('private reg:', req.body);
            const dataOfUser = {
                mail: req.body.email,
                username: req.body.username,
                password: hashPW,
                group: req.body.userGroupe,
            };
            UserDataModel(dataOfUser).save();
            res.send('Successfull registrated!');
        }
    } catch (error) {
        console.log('ERROR:', error, 'Error by registration!');
    }
};
