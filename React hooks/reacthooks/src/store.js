import { legacy_createStore } from "redux";

const initial = {
  num: "",
  array: [],
};
const reducer = (prevstate = initial, action) => {
  switch (action.type) {
    case "setArray":
      return { ...prevstate, array: action.payload };
      break;
    case "setNum":
      return { ...prevstate, num: action.payload };
      break;
  }
  return prevstate;
};
const store = legacy_createStore(reducer);
export default store;
