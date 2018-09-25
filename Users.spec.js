const axios = require('axios');
const Users = require('./Users');

jest.mock('axios');

test('should fetch users', () => {
  const resp = {data: [{name: 'Bob'}]};
  axios.get.mockReturnValue(new Promise(r => r(resp)));

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(users => expect(users).toEqual(resp.data));
});