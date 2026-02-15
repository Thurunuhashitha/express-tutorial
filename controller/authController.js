// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { getConnection } = require('../db/db-connection');
// const connection = getConnection();

// const JWT_SECRET = 'your_super_secret_key'; // store in env for production
const register = async (req, res) => { 
    console.log('register')
    res.json({ message: "Register route working" })
      
};
const login = async (req, res) => { 
    console.log('login')
    res.json({ message: "Login route working" })
      
};

module.exports = { register , login };
