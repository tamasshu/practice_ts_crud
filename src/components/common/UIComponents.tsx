import React from "react";
import { OptionType } from "../../types/OptionType";

type InputPropsType = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: "text" | "date";
  placeholder?: string;
  className: string;
};

type SelectPropsType = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: OptionType;
  placeholder?: string;
  className: string;
};

type ButtonPropsType = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  variant: "submit" | "delete";
};

export const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
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

export const Select = React.forwardRef<HTMLSelectElement, SelectPropsType>(
  (
    { value, onChange, name = "", options, placeholder = "", className },
    ref
  ) => {
    return (
      <select
        value={value}
        onChange={onChange}
        name={name}
        ref={ref}
        className={`w-full px-3 py-2 border rounded focus:border-lightBlue focus:outline-none ${className}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export const Button: React.FC<ButtonPropsType> = ({
  children,
  onClick,
  variant = "submit",
  type = "button",
}) => {
  const baseClasses =
    "px-4 py-2 text-white font-bold tracking-wide whitespace-nowrap border-none rounded transition duration-300 ease-in-out";
  const variantClasses =
    variant === "submit"
      ? "bg-black hover:bg-blackHover"
      : "bg-pink hover:bg-pinkHover w-full";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </button>
  );
};
