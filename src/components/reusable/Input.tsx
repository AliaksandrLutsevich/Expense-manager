import React from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border rounded p-2 ${className}`}
    />
  );
};

export default Input;
