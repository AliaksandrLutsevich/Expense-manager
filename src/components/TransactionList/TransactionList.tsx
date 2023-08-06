import React, { useState } from "react";
import Transaction from "./Transaction";
import Pagination from "../reusable/Pagination";

interface TransactionListProps {
  transactions: Transaction[];
  itemsPerPage: number;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <div className="shadow-lg overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Sum</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {visibleTransactions.map((transaction) => (
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TransactionList;
