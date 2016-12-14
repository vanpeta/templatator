var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

function Main () {
  return (
    <div>
      <p className='lead'>Main Page</p>
      <Link to='/Home'>
        <button type='button' className='btn btn-lg btn-success'>Go Home</button>
      </Link>
    </div>
  )
}

module.exports = Main;
