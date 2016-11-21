const Sequelize = require('sequelize');
const User = require('./../../database/models/users');
var request = require('request');
var expect = require('chai').expect;
var { Harry, Malfoy } = require('./dbExamples');

describe('Users', function() {
  // before
  beforeEach(() => {
    // create test database
    const database = new Sequelize('test', '', '', {
      dialect: 'postgres'
    });

    // add harry potter user record
    User.create(Harry)
        .then((user) => console.log(user.first_name, user.last_name));
  });
    // add malfoy user record
    // add harry vs malfoy game record
    // add malfoy vs harry game record
    // add house cup achievement record
    // add graduation achievement record

  afterEach(() => {
    // destroy all rows
    User.destory();
  });

  it("should get a user's profile", function(done) {
  });

  it("should get a list of user's games", function(done) {
  });

  it("should get a list of a user's achievements", function(done) {
  });

  it("should get a list of users by keyword", function(done) {
  });
});
