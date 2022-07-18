import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, toDoState } from "../atoms";

interface ICategoryForm {
  category: string;
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

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const handleValid = ({ category }: ICategoryForm) => {
    console.log(category);
    setValue("category", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <Input {...register("category")} placeholder="Add Category" />
      <Button>Add</Button>
    </Form>
  );
}

export default CreateCategory;
