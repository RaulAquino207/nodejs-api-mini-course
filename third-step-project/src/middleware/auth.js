const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: 'src/.env' });

// const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token){
        res.status(403).send('A token is required for authentication');
    }
    
    try {
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (error) {
        return res.status(401).send('Invalid Token');
    }

    return next();
}

module.exports = verifyToken;