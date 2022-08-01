const jwt = require('jsonwebtoken');
const {secret} = require('../config')

module.exports = function (req, res, next) {
  if(req.method === 'OPTIONS') next()

  try {
    const token = req.headers?.authorization?.split(' ')[1]
    if(!token) res.status(403).json({message: 'user not registered'})
    const decodeData = jwt.verify(token, secret);
    req.user = decodeData;
    next()
  } catch (error) {
    console.log(error);
  }
}