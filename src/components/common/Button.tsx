import styled from "styled-components";
import { colors } from "../../styles/variables";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant: "submit" | "delete";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "submit",
  type = "button",
}) => {
  return (
    <StyledButton type={type} onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  padding: 0.4rem 0.6rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  white-space: nowrap;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  color: ${colors.white};

  width: ${({ variant }) => (variant === "delete" ? "100%" : "auto")};
  background-color: ${({ variant }) =>
    variant === "submit" ? `${colors.black}` : `${colors.pink}`};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "submit" ? `${colors.blackHover}` : `${colors.pinkHover}`};
  }
`;
