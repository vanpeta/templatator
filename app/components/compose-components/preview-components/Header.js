import React from "react";

import * as HeaderActions from "../../../actions/Actions"
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHovered: false};
  }
  deleteHeader(id) {
    HeaderActions.deleteHeader(id)
  }
  editHeader (id) {
    HeaderActions.editHeader (id)
  }
  handleMouseEnter() {
    this.setState({isHovered: true});
  }
  handleMouseLeave() {
    this.setState({isHovered: false});
  }
  render() {
    const isHovered = this.state.isHovered;
    const isSaved = this.props.header.saved;
    console.log(this.props.header)

    let removeButton = null;
    if (isHovered && isSaved) {
      removeButton =
      <div style={{marginTop: '10px', textAlign: 'left', color: '#888', fontFamily: 'verdana', fontWeight: 'bold', fontSize: 'x-small', cursor: 'pointer', textDecoration: 'none', letterSpacing: 'normal'}}>
        <div
          style={{display: 'inline-block', paddingRight: '5px'}}
          onClick={() => {this.editHeader(this.props.header.id)}}>
          EDIT
        </div>
        <div
          style={{display: 'inline-block', paddingRight: '5px'}}
          onClick={() => {this.deleteHeader(this.props.header.id)}}>
          REMOVE
        </div>
      </div>
    }
    return (
      <tr>
        <td
          valing="top"
          isHovered={isHovered}
          onMouseEnter={() => {this.handleMouseEnter()}}
          onMouseLeave={() => {this.handleMouseLeave()}}
          style={{textAlign: this.props.header.alignment, fontWeight: this.props.header.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.header.size, color: this.props.header.color, lineHeight: '.8em', paddingLeft: '5%'}}>
          {this.props.header.copy}
          {removeButton}
        </td>
      </tr>
    );
  }
}
