import React from 'react';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to='/Guess'>
          <p className='lead'>Guess</p>
        </Link>
        <Link to='/GuessFactory'>
          <p className='lead'>Guess Factory</p>
        </Link>
        <Link to='/GbyGuess'>
          <p className='lead'>G by Guess</p>
        </Link>
        <Link to='/GuessKids'>
          <p className='lead'>Guess Kids</p>
        </Link>
        <Link to='/Marciano'>
          <p className='lead'>Marciano</p>
        </Link>
      </div>
    )
  }
}
