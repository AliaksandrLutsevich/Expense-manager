// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import transactionsReducer from "./transactionSlice";

// export const store = configureStore({
//   reducer: {
//     transactions: transactionsReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// store.ts

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
