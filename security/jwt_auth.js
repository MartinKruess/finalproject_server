import config from ('./config')
import jwt from ('jsonwebtoken');
import { UserDataModel } from ('./schemas/user-schemas');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh')

// LOGIN TESTDATEN
// USERNAME: Testbob
// PASSWORD: LoginPW123!

// Auth function
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authtoken']
    if(token === null) return res.sendStatus(401)

    jwt.verify(token, config.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
      if (err) return res.status(403).send(err)
      const userFromDB = await UserDataModel.findById( decodedUser.userID )
      const userPublic = userFromDB.toObject()
      delete userPublic.password
      userPublic.userID = userPublic._id
      req.user = userPublic
      next()
    })
  }

// Create Token with userData(DB)
export const createAccessToken = (user)=> {
      const accessToken = jwt.sign(user, config.ACCESS_TOKEN_SECRET)
      return accessToken;
  }