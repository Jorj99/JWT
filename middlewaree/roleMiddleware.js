const jwt = require('jsonwebtoken');
const {secret} = require('../config')

module.exports = function (roles) {
  return (req, res, next) => {
    if(req.method === 'OPTIONS') next()

    try {
      const token = req.headers?.authorization?.split(' ')[1]
      if(!token) res.status(403).json({message: 'user not registered'})
      const { roles: userRoles }= jwt.verify(token, secret)
      let hasRole = false
      userRoles.forEach(role => {
            if(role.includes(role)) {
                hasRole = true;
            }
      });
      if(!hasRole) res.status(403).json({message: "you don't have access"})
      next()
    } catch (error) {
      console.log(error);
    }
  }
}