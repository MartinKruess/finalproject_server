//import { loginController, registerController } from "../controller/userController";

import { loginController } from "../controller/loginController.js"
import { registerController } from "../controller/registerController.js"


export const registerRouter = router.post('/register', registerController)
export const loginRouter = router.post("/login", loginController)