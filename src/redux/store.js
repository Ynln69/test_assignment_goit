import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./userApi";
// import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    // users: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    usersApi.middleware,
  ],
});
