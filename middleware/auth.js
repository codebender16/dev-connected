const jwt = require('jsonwebtoken');
const config = require('config');

// why we need the middleware? 
// is there a way around it without using middleware?

module.exports = function(req, res, next) {
  // get the token from the header
  const token = req.header('x-auth-token')

  // check if not token
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorisation denied'});
  }

  // verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtToken'))

    req.user = decoded.user
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is no valid' })
  }
}