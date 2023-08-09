import React from "react";
import Button from "./Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
