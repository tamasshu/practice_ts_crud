import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: "text" | "date";
  placeholder?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      onChange,
      name = "title",
      type = "text",
      placeholder = "タスクを入力してください",
      className,
    },
    ref
  ) => {
    return (
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`w-full px-3 py-2 border rounded ${className}`}
      />
    );
  }
);

Input.displayName = "Input";
