var React = require('react');
var ReactRouter = require('react-router');
var Elements = require ('./Elements');
var Preview = require ('./Preview');
var Link = ReactRouter.Link

function Compose () {
  return (
    <div className="text-center">
      <h2 className="col-sm-8 col-sm-offset-2">Compose</h2>
      <div className="row">
        <Elements />
        <Preview />
      </div>
    </div>
  )
}

module.exports = Compose;
