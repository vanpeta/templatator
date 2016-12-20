import React from "react";

export default class Block extends React.Component {

  render() {
    return (
      <table width="100%" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td valing="top" style={{textAlign: this.props.block.alignment, fontWeight: this.props.block.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.block.size+'px', color: this.props.block.color, lineHeight: '.8em', paddingLeft: '5%'}}>
            {this.props.block.copy}
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
}
