const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('Correct status code when :id is a number?', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
    
    // Add more test cases as needed
  });

  describe('GET /available_payments', () => {
    it('Returns correct response for available_payments', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        const responseBody = JSON.parse(body);
        expect(res.statusCode).to.be.equal(200);
        expect(responseBody).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('Returns correct response for login', (done) => {
      const userName = 'Betty';
      const requestData = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: { userName }
      };

      request(requestData, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Welcome ${userName}`);
        done();
      });
    });
  });
});
