const bcrypt = require('bcrypt');

async function hasPassword(password) {
    try {
        const salt =  await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(password, salt);
        return hasPassword;
        
    } catch (error) {
        console.error(error);
        throw new error
    }

}

module.exports = hasPassword;