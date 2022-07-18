import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Categories, toDoSelector } from "../atoms";
import CategorySelector from "./CategorySelector";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  width: 80%;
  color: ${(props) => props.theme.accentColor};
  font-size: 68px;
  font-weight: 600;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;

const List = styled.ul`
  width: 80%;
  margin-top: 20px;
  border: 1px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Wrapper>
      <Title>Your To Do</Title>
      <CreateCategory />
      <CategorySelector />
      <CreateToDo />
      <List>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </List>
    </Wrapper>
  );
}

export default ToDoList;
