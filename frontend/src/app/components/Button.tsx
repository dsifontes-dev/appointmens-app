import styled from "styled-components";

const buttonMap = {
  primary: "#007bff",
  secondary: "#6c757d",
  danger: "#dc3545",
};

const Button = styled.button<{
  buttontype: "primary" | "secondary" | "danger";
}>`
  border-radius: 8px;
  padding: 12px;
  outline: none;
  font-size: 16px;
  margin-right: 8px;
  color: white;
  border: 1px solid ${({ buttontype }) => buttonMap[buttontype]};
  background-color: ${({ buttontype }) => buttonMap[buttontype]};

  &:hover {
    border: 1px solid #000;
    cursor: pointer;
  }
`;

export default Button;
