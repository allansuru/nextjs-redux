import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import bookReducer from "../../modules/book/shared/state/bookReducer";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: [thunk],
});

export default store;
