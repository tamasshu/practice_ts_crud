import React from "react";
import { colors } from "../../styles/variables";
import styled from "styled-components";

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
    },
    ref
  ) => {
    return (
      <StyledInput
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.6rem;
  border: 1px solid ${colors.white};
  border-radius: 0.2rem;

  &:focus {
    border-color: ${colors.lightBlue};
    outline: none;
  }
`;
