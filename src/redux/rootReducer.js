import Auth from "@src/views/Auth/store";
import letters from "@src/views/Letter/store";
import types from "@src/views/Type/store";

import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,
  types,
  letters
};

export default rootReducer;
