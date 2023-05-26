import Auth from "@src/views/Auth/store";
import bags from "@src/views/Bag/store";
import letters from "@src/views/Letter/store";
import letterLists from "@src/views/LetterList/store";
import types from "@src/views/Type/store";

import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,
  types,
  letters,
  letterLists,
  bags
};

export default rootReducer;
