const bcrypt = require('bcrypt');

module.exports = {
    hashPassword: (password) => {
        return bcrypt.hashSync(password.toString(), 10);
    },
    comparePassword: (plainPassword, Dbpassword) => {
        return bcrypt.compareSync(plainPassword, Dbpassword);
    },
};
