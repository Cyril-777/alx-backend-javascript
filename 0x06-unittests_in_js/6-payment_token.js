function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    return Promise.reject('API request failed');
  }
}

module.exports = getPaymentTokenFromAPI;
