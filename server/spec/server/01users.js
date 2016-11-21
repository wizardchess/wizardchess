const Sequelize = require('sequelize');
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

    const User = database.define('user', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      username: { type: Sequelize.STRING, },
      password: { type: Sequelize.STRING, },
      facebook_id: { type: Sequelize.STRING, },
      first_name: { type: Sequelize.STRING, },
      last_name: { type: Sequelize.STRING, },
      birthday: { type: Sequelize.DATE, },
      date_time: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, },
    });

    // add harry and malfoy records
    User.create(Harry);
    User.create(Malfoy);

    database.sync();
  });
    // add harry vs malfoy game record
    // add malfoy vs harry game record
    // add house cup achievement record
    // add graduation achievement record

  afterEach(() => {
    // destroy all rows
    User.destroy();
  });

  it("should get a user's profile", function(done) {
    done();
  });

  it("should get a list of user's games", function(done) {
    done();
  });

  it("should get a list of a user's achievements", function(done) {
    done();
  });

  it("should get a list of users by keyword", function(done) {
    done();
  });
});
