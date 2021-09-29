const bcrypt = require('bcryptjs');
const Users = [
    {
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'zain',
        email: 'zain@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'user',
        email: 'user@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
];

module.exports = Users;