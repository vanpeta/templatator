import dispatcher from "../dispatcher";

export function createHeader(header) {
  dispatcher.dispatch({
    type: "CREATE_HEADER",
    header: header
  });
}

export function deleteHeader (id) {
  dispatcher.dispatch({
    type: "DELETE_HEADER",
    id: id
  })
}
