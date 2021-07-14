const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () =>
        request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200));
    });
  });

  describe('/timeline', () => {});

  describe('/signin', () => {});

  describe('/signup', () => {});

  describe('/rankboard', () => {});

  describe('/api/user', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .get('/api/user')
          .expect('Content-Type', /application\/json/)
          .expect(200));
    });
    it('users from db_authUsers json are in body of response', () => {});
    describe('POST', () => {
      it('responds to invalid request with 400 status and error message in body', () => {});
    });
    // describe('PUT', () => {

    // })
    // describe('DELETE', () => {

    // })
  });

  describe('/api/shoutout', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () =>
        request(server)
          .get('/api/shoutout')
          .expect('Content-Type', /application\/json/)
          .expect(200));
    });
    describe('POST', () => {
      it('responds to invalid request with 400 status and error message in body', () => {});
    });
    // describe('PUT', () => {

    // })
    // describe('DELETE', () => {

    // })
  });
});
