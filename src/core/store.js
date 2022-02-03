import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import personalHomepageReducer from "../features/personalHomepageSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
