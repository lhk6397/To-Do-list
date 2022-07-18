import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IToDOForm {
  toDo: string;
}

const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Input = styled.input`
  background-color: transparent;
  text-align: center;
  width: 70%;
  height: 30px;
  color: ${(props) => props.theme.accentColor};
  border: 1px solid ${(props) => props.theme.textColor};
  ::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;

const Button = styled.button`
  background-color: transparent;
  text-align: center;
  width: 25%;
  height: 30px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IToDOForm>();
  const handleValid = ({ toDo }: IToDOForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <Button>Add</Button>
    </Form>
  );
}

export default CreateToDo;
