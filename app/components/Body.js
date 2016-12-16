import React from "react";

export default class Body extends React.Component {

  render() {
    return (
      <table width="100%" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td valing="top" style={{textAlign: 'center', fontWeight: 'normal', fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: '70px', color: '#000000', lineHeight: '.8em', paddingLeft: '5%'}}>
            {this.props.header.copy}
          </td>
        </tr>
        </tbody>
      </table>
    )
  }
}
