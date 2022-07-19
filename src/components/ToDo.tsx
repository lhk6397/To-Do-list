import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState, IToDo, toDoState } from "../atoms";

const ToDoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Span = styled.span`
  width: 60%;
  font-size: 20px;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
  height: 100%;
  overflow: auto;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 0.5em;
  width: 30%;
  height: 100%;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  margin-right: 5px;
  padding: 10px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.accentColor};
    border-color: ${(props) => props.theme.accentColor};
    transform: translateY(3px);
  }
  :last-child {
    color: #ef5777;
    border: 1px solid #ef5777;
  }
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const categories = useRecoilValue(categoriesState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      // as any는 typescript에게 타입을 체크하지 말라는 것과 같은 의미
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDeleteClick = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <ToDoItem>
      <Span>{text}</Span>
      <Buttons>
        {categories.map((aCategory) => {
          if (category !== "" + { aCategory }) {
            return (
              <Button name={aCategory} onClick={onClick}>
                {aCategory}
              </Button>
            );
          }
        })}
        <Button onClick={onDeleteClick}>Delete</Button>
      </Buttons>
    </ToDoItem>
  );
};

export default ToDo;
