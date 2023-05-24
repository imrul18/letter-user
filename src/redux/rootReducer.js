import Auth from "@src/views/Auth/store";
import postOffices from "@src/views/PostOffice/store";
import users from "@src/views/User/store";

import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,
  postOffices,
  users
};

export default rootReducer;
