const axiosModule = require('axios');

const base_url = 'http://localhost:3000/';

const axios = axiosModule.default.create({
  baseURL: base_url,
  validateStatus: (status) => {
    return status >= 200 && status < 500;
  },
});

// Create a user (with valid data)
axios.post('user', {
  username: 'user2',
  email: 'user@fake.com',
  password: 'test2',
})
.then(res => {
  console.log({
    code: res.status,
    response: res.data,
  })
})
.catch((error) => console.log(error));