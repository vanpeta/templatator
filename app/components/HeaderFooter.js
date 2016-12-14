import React from 'react';
import Frame from 'react-frame-component';

import GuessUS from './GuessUS';
import styles from '../styles';

export default class HeaderFooter extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Frame width="600px"><GuessUS name="World"/></Frame>
    )
  }
}

