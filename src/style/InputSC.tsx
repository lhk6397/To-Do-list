import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  text-align: center;
  width: 70%;
  height: 30px;
  color: ${(props) => props.theme.accentColor};
  border: 1px solid ${(props) => props.theme.textColor};
  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }
  :hover {
    color: ${(props) => props.theme.accentColor};
    border-color: ${(props) => props.theme.accentColor};
    transform: translateY(3px);
    ::placeholder {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
