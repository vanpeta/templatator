import React from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <p className='lead'>Main Page</p>
        <Link to='/Home'>
          <button type='button' className='btn btn-lg btn-success'>Go Home</button>
        </Link>
      </div>
    )
  }
}
