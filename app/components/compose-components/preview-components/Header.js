import React from "react";

import * as HeaderActions from "../../../actions/Actions"
export default class Header extends React.Component {
  deleteHeader(id){
    HeaderActions.deleteHeader(id)
  }
  render() {
    return (
      <tr>
        <td valing="top" style={{textAlign: this.props.header.alignment, fontWeight: this.props.header.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.header.size, color: this.props.header.color, lineHeight: '.8em', paddingLeft: '5%'}}>
          {this.props.header.copy}
        </td>
        <td>
          <button type="submit" onClick={() => {this.deleteHeader(this.props.header.id)}}>remove</button>
        </td>
      </tr>
    );
  }
}
