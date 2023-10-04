import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "../TransactionList";

describe("TransactionList Component", () => {
  it("renders transaction data correctly", () => {
    const transactions = [
      {
        id: "1",
        description: "Transaction 1",
        amount: 100,
        date: "2023-09-24",
      },
    ];

    render(<TransactionList transactions={transactions} itemsPerPage={10} />);

    transactions.forEach((transaction) => {
      expect(screen.getByText(transaction.id.toString())).toBeInTheDocument();
      expect(screen.getByText(transaction.description)).toBeInTheDocument();
      expect(
        screen.getByText(transaction.amount.toString())
      ).toBeInTheDocument();
      expect(screen.getByText(transaction.date)).toBeInTheDocument();
    });
  });
});
