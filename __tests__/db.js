// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const userQueries = require('../server/db/userQueries.js');
const shoutoutQueries = require('../server/db/shoutoutQueries.js');

const userTestFile = path.resolve(__dirname, '../server/db/users.test.json');
const shoutoutTestFile = path.resolve(__dirname, '../server/db/shoutouts.test.json');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
describe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  });

  // SELECT * FROM users
  describe('#getUsers', () => {
    it('returns list of all users from the db', () => {});

    it('works if the list of users is empty', () => {});
  });
  
  describe('#authUsers', () => {
    const table = JSON.parse(fs.readFileSync('./__tests__/testcases/db_authUsers'));
    // it('returns an error when
    // it('returns an error when
  });
  // INSERT INTO
  describe('#addUser', () => {
    const table = JSON.parse(fs.readFileSync('./__tests__/testcases/db_addUser'));
    // it('returns an error when
    // it('returns an error when
  });
  // describe('#editUser', () => {
  // });
  // describe('#deleteUser', () => {
  // });

  describe('#getShoutouts', () => {
    it('returns list of all shoutouts from the db', () => {});

    it('works if the list of shoutouts is empty', () => {});
  });
  describe('#addShoutout', () => {
    const table = JSON.parse(fs.readFileSync('./__tests__/testcases/db_addShoutout'));
    // it('returns an error when
    // it('returns an error when
  });
  describe('#editShoutout', () => {
    // adding upvotes functionality
    // it('returns an error when
  });
  // describe('#deleteShoutout', () => {
  // });
});
