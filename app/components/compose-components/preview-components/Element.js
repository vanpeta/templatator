import React from "react";

import * as elementActions from "../../../actions/Actions";

export default class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type: this.props.element.type};
  }

  deleteElement(id) {
    elementActions.deleteElement(id)
  }
  editElement (id) {
    elementActions.editElement (id)
  }
  handleMouseEnter() {
    this.setState({isHovered: true});
  }
  handleMouseLeave() {
    this.setState({isHovered: false});
  }
  render() {
    console.log(this.props.element)
    const isHovered = this.state.isHovered;
    const isSaved = this.props.element.saved;
    let editButtons = null;
    if (isHovered && isSaved) {
      editButtons =
      <tr>
        <td onMouseLeave={() => {this.handleMouseLeave()}}>
          <div style={{marginTop: '10px', textAlign: 'left', color: '#888', fontFamily: 'verdana', fontWeight: 'bold', fontSize: 'x-small', cursor: 'pointer', textDecoration: 'none', letterSpacing: 'normal'}}>
            <div
              style={{display: 'inline-block', paddingRight: '5px'}}
              onClick={() => {this.editElement(this.props.element.id)}}>
              EDIT
            </div>
            <div
              style={{display: 'inline-block', paddingRight: '5px'}}
              onClick={() => {this.deleteElement(this.props.element.id)}}>
              REMOVE
            </div>
          </div>
        </td>
      </tr>
    }
    const link = this.props.element.href;
    let anchorTag = null;
    if (link && this.state.type == "image") {
      anchorTag = (
        <tr>
          <td>
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td
                    align="center"
                    valing="top"
                    isHovered={isHovered}
                    onMouseEnter={() => {this.handleMouseEnter()}}>
                    <a href={link} _label={this.props.element.label}>
                      <img  width="100%" style={{display: 'block'}} src={this.props.element.src} alt={this.props.element.alt} />
                    </a>
                    {editButtons}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
      return (
        <tbody>
          {text}
          {image}
          {anchorTag}
        </tbody>
      )
    }
    if (link && this.state.type == "text") {
      anchorTag = (
        <tr>
          <td>
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td
                    valing="top"
                    isHovered={isHovered}
                    onMouseEnter={() => {this.handleMouseEnter()}}>
                    <a href={link} _label={this.props.element.label} style={{textAlign: this.props.element.alignment, fontWeight: this.props.element.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.element.size, color: this.props.element.color, lineHeight: '.8em', paddingLeft: '5%', textDecoration:'none'}}>
                    {this.props.element.copy}
                    </a>
                    {editButtons}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
      return (
        <tbody>
          {text}
          {image}
          {anchorTag}
        </tbody>
      )
    }
    const type = this.state.type
    let text = null;
    let image = null;
    if (this.state.type == "text") {
      text = (
        <tr>
          <td valing="top">
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td
                    valing="top"
                    isHovered={isHovered}
                    onMouseEnter={() => {this.handleMouseEnter()}}
                    style={{textAlign: this.props.element.alignment, fontWeight: this.props.element.fontWeight, fontFamily: 'CenturyGothic, Futura, Verdana, sans-serif', letterSpacing: '.25em', fontSize: this.props.element.size, color: this.props.element.color, lineHeight: '.8em', paddingLeft: '5%'}}>
                    {this.props.element.copy}
                    {editButtons}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
      return (
        <tbody>
          {text}
        </tbody>
      )
    };
    if (this.state.type == "image") {
      image = (
        <tr>
          <td>
            <table width="100%" border="0" cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <td
                    align="center"
                    valing="top"
                    isHovered={isHovered}
                    onMouseEnter={() => {this.handleMouseEnter()}}>
                    <img  width="100%" style={{display: 'block'}} src={this.props.element.src} alt={this.props.element.alt} />
                    {editButtons}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )
    };
    if (this.state.type == "cta") {
      cta = (
        <tr>
          <td align="left" valing="top">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="left" align="top" style={{width: '50%', paddingLeft: '6%', paddingRight: '3%'}}>
                  <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                    <tr>
                      <td bgcolor="#000000" style={{padding: '30px 8px 30px 8px', textAlign: 'center'}}>
                        <a href="https://shop.guess.ca/en/Catalog/Browse/accessories/" _label="CONTENT-CTA"
                        style={{fontSize: '18px', fontFamily: 'Century Gothic, CenturyGothic, Futura, Verdana, sans-serif', fontWeight: 'normal', color: '#ffffff', textDecoration: 'none', letterSpacing: '.2em', display: 'inline-block'}}>
                          {this.props.element.copy}
                          {editButtons}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      )
    }
    return (
      <tbody>
        hola
        {text}
        {image}
      </tbody>
    );
  }
}
