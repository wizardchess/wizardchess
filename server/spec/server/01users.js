const Sequelize = require('sequelize');
const request = require('request');
const expect = require('chai').expect;
const { Harry, Malfoy } = require('./dbExamples');
const User = require('./../../database/models/users');

describe('Users', function() {
  // before
  before(() => {
    // add harry and malfoy records
    User.findOne({ where: Harry })
        .then((user) => {
          if (user === null) {
            User.create(Harry);
          }
        });

    User.findOne({ where: Malfoy })
        .then((user) => {
          if (user === null) {
            User.create(Malfoy);
          }
        });
  });
    // add harry vs malfoy game record
    // add malfoy vs harry game record
    // add house cup achievement record
    // add graduation achievement record

  const options = {
    json: true,
  }

  it("should get a user's profile", function(done) {
    options.url = `http://127.0.0.1:3000/api/users?username=${Harry.username}`;
    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.an('object');
      for (var key in Harry) {
        expect(body[key]).to.equal(Harry[key]);
      }
      done();
    });
  });

  it("should get a list of user's games", function(done) {
    options.url = `http://127.0.0.1:3000/api/games?username=${Harry.username}`;
    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.an('array');
      done();
    });
  });

  it("should get a list of a user's achievements", function(done) {
    options.url = `http://127.0.0.1:3000/api/achievements?username=${Harry.username}`;
    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.an('array');
      done();
    });
  });

  it("should get a list of users by keyword", function(done) {
    options.url = `http://127.0.0.1:3000/api/users?keyword=`;
    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.an('array');
      done();
    });
  });
});
