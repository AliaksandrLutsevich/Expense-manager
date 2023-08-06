import React from "react";
import Transaction from "./Transaction";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <div className="shadow-lg overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Desctiprion</th>
              <th className="px-4 py-2">Sum</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
