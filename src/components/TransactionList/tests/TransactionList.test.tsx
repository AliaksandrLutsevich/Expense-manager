import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionList from "../TransactionList";

describe("TransactionList", () => {
  const transactions = [
    {
      id: 1,
      description: "Food",
      amount: -100,
      date: "2023-08-02",
    },
    {
      id: 2,
      description: "Salary",
      amount: 500,
      date: "2023-08-01",
    },
  ];

  it("renders transaction data correctly", () => {
    render(<TransactionList transactions={transactions} />);

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
