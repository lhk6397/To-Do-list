import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  text-align: center;
  width: 25%;
  height: 30px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.accentColor};
    border-color: ${(props) => props.theme.accentColor};
    transform: translateY(3px);
  }
`;
