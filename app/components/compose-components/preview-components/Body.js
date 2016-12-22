import React from "react";

import ElementStore from "../../../stores/ElementStore";
import Header from "./Header";
import Image from "./Image";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    elements: ElementStore.getAll()
    };
  }
  componentWillMount() {
    ElementStore.on('change', () => {
      this.setState({
        elements: ElementStore.getAll(),
      })
    });
  }
  render() {
    const elementSaved = this.props.header.saved;
    let currentElement = null;
    if (!elementSaved) {
      currentElement = (
        <Header header={this.props.header} />
      )
    }


    const { elements } = this.state;
    const ElementComponents = elements.map((element) => {
      return <Header key={element.id} header={element} />
    });

    return (
      <table width="100%" border="0" cellSpacing="0" cellPadding="0">
        <tbody>
          {ElementComponents}
          {currentElement}
        </tbody>
      </table>
    );
  }
};



