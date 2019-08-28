const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();

it("should run the home page", function(done) {
  chai
    .request(app)
    .get("/")
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    });
});

it("should search for number", function(done) {
  const howMany = {
    howMany: 10
  };
  chai
    .request(app)
    .post("/generate")
    .send(howMany)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a("object");
      done();
    });
});

it("should load total page", function(done) {
  chai
    .request(app)
    .get("/total")
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    });
});

it("should load ascending page", function(done) {
  chai
    .request(app)
    .get("/ascending")
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    });
});

it("should load descending page", function(done) {
  chai
    .request(app)
    .get("/descending")
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    });
});
