import { EventEmitter } from 'events';

import dispatcher from "../dispatcher";

class ElementStore extends EventEmitter {
  constructor() {
    super();
    this.elements = [];
  }
  createNewElement(element) {
    const id = Date.now()
    this.elements.push({
      saved: element.saved,
      type: element.type,
      id: id,
      copy: element.copy,
      color: element.color,
      size: element.size,
      fontWeight: element.fontWeight,
      alignment: element.alignment,
      src: element.src,
      alt: element.alt
    });
    this.emit("change");
    console.log(this.elements)
  }
  deleteElement (id) {
    var newLst = this.elements.filter((val) => {
      return val.id != id;
    });
    this.elements = newLst;
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_ELEMENT": {
        this.createNewElement(action.element);
      }
    }
    switch(action.type) {
      case "DELETE_ELEMENT":{
        this.deleteElement(action.id);
      }
    }
  }

  getAll() {
    return this.elements;
  }
}

const elementStore = new ElementStore;
dispatcher.register(elementStore.handleActions.bind(elementStore))
//elementStore.on("change", someHandler);

export default elementStore;
