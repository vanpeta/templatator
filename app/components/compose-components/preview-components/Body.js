import React from "react";

import Element from "./Element";
import ElementStore from "../../../stores/ElementStore";

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
    const elementSaved = this.props.element.saved;
    const elementIsSelected = this.props.element.selected;
    let currentElement = null;
    if (!elementSaved && elementIsSelected) {
      currentElement = (
        <Element element={this.props.element} />
      )
    }

    const elements = this.state.elements;
    const ElementsComponents = elements.map((e) => {
      return <Element key={e.id} element={e} />
    });

    return (
      <table width="100%" border="0" cellSpacing="0" cellPadding="0">
        {ElementsComponents}
        {currentElement}
      </table>
    );
  }
};



