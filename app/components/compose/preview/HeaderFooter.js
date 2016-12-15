import React from 'react';
import Frame from 'react-frame-component';

import GuessUS from './GuessUS';
import styles from '../styles';

export default class HeaderFooter extends React.Component {

  render() {
    return (
      <Frame html={'xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"'}
      head={[
        <meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />,
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />,
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=4" />,
        <meta name="format-detection" content="telephone=no" />,
        <meta name="autolink" content="no" />,
        <title>Guess</title>,
        <style>{'a img {border: 0 none;}a, a:visited, a:hover, a:active { color: inherit; } .gmailfix { display:none; display:none!important; } @media only screen and (max-width: 580px) { *[class="padd_10"] { padding-left:10px; padding-right:10px; } } @media only screen and (min-device-width: 1200px) { @media only screen and (max-width: 580px) { .set_width_100 { width: 100%!important; } } }'}
        </style>
      ]}>
          <GuessUS title={this.props.title}/>
      </Frame>
    )
  }
}
