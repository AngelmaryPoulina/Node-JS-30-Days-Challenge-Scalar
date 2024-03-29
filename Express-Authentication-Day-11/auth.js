const jwt = require('jsonwebtoken');
const your_secret_key = 'your-secret'; 

function authenticationMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('No token provided.');
    }
    jwt.verify(token, your_secret_key, (err, decoded) => {
        if (err) {
            return res.status(500).send('Failed to authenticate.');
        }
        req.user = decoded;
        console.log('User authenticated:', decoded);
        next();
    });
}

module.exports = authenticationMiddleware;