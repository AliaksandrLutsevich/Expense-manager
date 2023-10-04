// // App.tsx
// import React from "react";
// import { Provider } from "react-redux";
// import { store } from "./components/TransactionsCRUD/store";
// import TransactionForm from "./components/TransactionsCRUD/TransactionForm";
// import TransactionList from "./components/TransactionList/TransactionList";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <TransactionForm />
//         <TransactionList transactions={[]} itemsPerPage={10} />
//       </div>
//     </Provider>
//   );
// };

// export default App;

// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/TransactionsCRUD/store";
import TransactionForm from "./components/TransactionsCRUD/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TransactionForm />
        <TransactionList transactions={[]} itemsPerPage={10} />
      </div>
    </Provider>
  );
};

export default App;
