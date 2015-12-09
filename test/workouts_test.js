var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = 'mongodb://localhost/workouts_test';
require(__dirname + '/../server');
var mongoose = require('mongoose');
var Workout = require(__dirname + '/../models/workout');

describe('workout routes', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should be able to create a workout', function(done) {
    var workoutData = {name: 'test workout'};
    chai.request('localhost:3000')
      .post('/api/workouts')
      .send(workoutData)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.name).to.eql('test workout');
        expect(res.body).to.have.property('_id');
        done();
      });
  });

  it('should be able to get all da workouts', function(done) {
    chai.request('localhost:3000')
      .get('/api/workouts')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  describe('needs a workout', function() {
    beforeEach(function(done) {
      (new Workout({name: 'test workout'})).save(function(err, data) {
        expect(err).to.eql(null);
        this.workout = data;
        done();
      }.bind(this));
    });

    it('should be able to modify a workout', function(done) {
      chai.request('localhost:3000')
        .put('/api/workouts/' + this.workout._id)
        .send({name: 'a different workout name'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });

    it('should be able to murder a workout', function(done) {
      chai.request('localhost:3000')
        .delete('/api/workouts/' + this.workout._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success!');
          done();
        });
    });
  });
});
