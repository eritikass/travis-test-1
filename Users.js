// users.js
const axios = require('axios');

class Users {
  static all() {
    const r = axios.get('/users.json');
    console.log('r', r);
    return r.then(resp => resp.data);
  }
}

module.exports = Users;