import { CompanyDataModel } from "../schemas/company/companySchema.js";

const supplierController = async (req, res => {

    const dataOfSupplier = {
        mail: req.body.email,
        name: req.body.company,
        username: req.body.contactPerson,
        group: req.body.userGroupe,
    };
    console.log('Supplier reg:', dataOfSupplier);
    CompanyDataModel(dataOfSupplier).save();
    res.send('Successfull registrated!');

    } catch (error) {
        console.log('ERROR:', error, 'Error by registration!');
    }
})
