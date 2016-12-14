var React = require('react');
var ReactRouter = require('react-router');
var HeaderFooter = require('./HeaderFooter');
var Link = ReactRouter.Link

function Preview () {
  return (
    <div className="col-sm-4">
      <p>Preview</p>
      <div>
        <HeaderFooter />
      </div>
    </div>
  )
}

module.exports = Preview;
