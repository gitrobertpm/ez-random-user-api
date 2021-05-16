let apiBaseUrl = 'http://localhost:5000/api';

if (process.env.NODE_ENV === 'production') {
  apiBaseUrl = 'https://ez-random-user-api.herokuapp.com/api';
}

module.exports = apiBaseUrl;
