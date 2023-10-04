// type Transaction = {
//   id: string;
//   description: string;
//   amount: number;
//   date: string;
// };

// export default Transaction;

import React from "react";

interface TransactionProps {
  transaction: {
    id: string;
    description: string;
    amount: number;
    date: string;
  };
}
interface TransactionType {
  id: string;
  description: string;
  amount: number;
  date: string;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <tr key={transaction.id}>
      <td className="border px-4 py-2">{transaction.id}</td>
      <td className="border px-4 py-2">{transaction.description}</td>
      <td
        className={`border px-4 py-2 ${
          transaction.amount < 0 ? "text-red-600" : "text-green-600"
        }`}
      >
        {transaction.amount}
      </td>
      <td className="border px-4 py-2">{transaction.date}</td>
    </tr>
  );
};

export default Transaction;
