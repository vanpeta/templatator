import React from 'react';

import GuessUS from './headerfooter-components/GuessUS';
import styles from '../../../styles';

export default class HeaderFooter extends React.Component {

  render() {
    return (
      <div className="col-sm-12" id="template" style={{border: '1px solid black', marginBottom:'-9999px', paddingBottom: '9999px'}}>
          <GuessUS
            header={this.props.header}
            updatedFss={this.props.updatedFss}/>
      </div>
    )
  }
}
