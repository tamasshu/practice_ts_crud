import React from "react";
import { colors } from "../../styles/variables";
import styled from "styled-components";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ value, onChange, name = "", options, placeholder = "" }, ref) => {
    return (
      <StyledSelect value={value} onChange={onChange} name={name} ref={ref}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    );
  }
);

Select.displayName = "Select";

const StyledSelect = styled.select`
  padding: 0.4rem 0.6rem;
  border: 1px solid ${colors.white};
  border-radius: 0.2rem;

  &:focus {
    border-color: ${colors.lightBlue};
    outline: none;
  }
`;
