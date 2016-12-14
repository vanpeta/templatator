var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Elements () {
  return (
    <div className="col-sm-4 col-sm-offset-2">
      <p>Elements</p>
      <div>
        <li className="list-group-item">Headers</li>
        <li className="list-group-item">Blocks of Text</li>
        <li className="list-group-item">Images</li>
        <li className="list-group-item">CTAs</li>
      </div>
    </div>
  )
}

module.exports = Elements;












