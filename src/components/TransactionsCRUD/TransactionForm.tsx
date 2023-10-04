// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addTransaction } from "../TransactionsCRUD/transactionSlice";
// import { v4 as uuidv4 } from "uuid";

// import Input from "../reusable/Input";
// import Button from "../reusable/Button";

// interface TransactionFormProps {}

// const TransactionForm: React.FC<TransactionFormProps> = () => {
//   const dispatch = useDispatch();
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const newTransaction = {
//       id: uuidv4(),
//       description,
//       amount: Number(amount),
//       date,
//     };

//     dispatch(addTransaction(newTransaction));

//     setDescription("");
//     setAmount("");
//     setDate("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//   <Input
//     type="text"
//     placeholder="Description"
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//     required
//   />
//   <Input
//     type="number"
//     placeholder="Amount"
//     value={amount}
//     onChange={(e) => setAmount(e.target.value)}
//     required
//   />
//   <Input
//     type="date"
//     value={date}
//     onChange={(e) => setDate(e.target.value)}
//     required
//   />
//   <Button type="submit">Add</Button>
//     </form>
//   );
// };

// export default TransactionForm;

// TransactionForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../TransactionsCRUD/transactionSlice";
import { v4 as uuidv4 } from "uuid";

import Input from "../reusable/Input";
import Button from "../reusable/Button";

const TransactionForm: React.FC = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: Number(amount),
      date,
    };
    console.log("Description:", description);
    console.log("Amount:", amount);
    console.log("Date:", date);

    dispatch(addTransaction(newTransaction));
    console.log(newTransaction);
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TransactionForm;
