import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import bookReducer from "../../modules/book/shared/state/bookReducer";
import userReducer from "../../modules/user/shared/state/userReducer";

const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;
