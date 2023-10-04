// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppThunk, RootState } from "./store";

// interface Transaction {
//   id: string;
//   description: string;
//   amount: number;
//   date: string;
// }

// interface TransactionsState {
//   transactions: Transaction[];
// }

// const initialState: TransactionsState = {
//   transactions: [],
// };

// const transactionsSlice = createSlice({
//   name: "transactions",
//   initialState,
//   reducers: {
//     addTransaction: (state, action: PayloadAction<Transaction>) => {
//       state.transactions.push(action.payload);
//     },
//   },
// });

// export const { addTransaction } = transactionsSlice.actions;
// export default transactionsSlice.reducer;

// transactionsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
}

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
