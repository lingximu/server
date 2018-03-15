require('dotenv').config()

module.exports = {
    private:{
        name: process.env.private_name,
        pass: process.env.private_pass
    }
}