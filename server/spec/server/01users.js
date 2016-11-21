var request = require('request');
var expect = require('chai').expect;

describe('Users', function() {
  // before
  beforeEach(() => {
    const Harry = {
      id: 1,
      username: 'boywholived',
      password: 'expectopatronus',
      facebook_id: 'boywholived',
      first_name: 'Harry',
      last_name: 'Potter',
      avatar_id: 1980,
      birthday: Date.now(),
      date_time: Date.now(),
    }

    const Malfoy = {
      id: 1,
      username: 'pureblood',
      password: 'ihateharry',
      facebook_id: 'pureblood',
      first_name: 'Draco',
      last_name: 'Malfoy',
      avatar_id: 1981,
      birthday: Date.now(),
      date_time: Date.now(),
    }

    const QuidditchCup = {
      id: 1,
      user_id: 1,
      achievement_name: 'Quidditch Cup',
      date_time: Date.now(),
    }
  });
    // create test database
    // add harry potter user record
    // add malfoy user record
    // add harry vs malfoy game record
    // add malfoy vs harry game record
    // add house cup achievement record
    // add graduation achievement record

  afterEach(() => {
    // destroy all rows
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
