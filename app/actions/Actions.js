import dispatcher from "../dispatcher";

export function createNewElement(element) {
  dispatcher.dispatch({
    type: "CREATE_ELEMENT",
    element: element
  });
}

export function deleteElement (id) {
  dispatcher.dispatch({
    type: "DELETE_ELEMENT",
    id: id
  });
}


