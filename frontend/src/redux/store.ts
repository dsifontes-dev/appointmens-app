import { configureStore } from "@reduxjs/toolkit";
import appointmentsListReducer from "./features/appointmentsListReducer";

export const store = configureStore({
  reducer: {
    appointmentsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
