import React from "react";

export default class Header extends React.Component {

  render() {
    return (
      <tbody>
        <tr>
          <td valing="top" style={{textAlign: this.props.header.alignment, fontWeight: this.props.header.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.header.size, color: this.props.header.color, lineHeight: '.8em', paddingLeft: '5%'}}>
            {this.props.header.copy}
          </td>
        </tr>
      </tbody>
    );
  }
}
