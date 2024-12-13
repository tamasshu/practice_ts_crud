import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
        className={`w-full px-3 py-2 border rounded focus:border-lightGreen focus:outline-none ${className}`}
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
