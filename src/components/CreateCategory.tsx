import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";
import { Button } from "../style/ButtonSC";
import { Form } from "../style/FormSC";
import { Input } from "../style/InputSC";

interface ICategoryForm {
  category: string;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<ICategoryForm>();
  const handleValid = ({ category }: ICategoryForm) => {
    setCategories((allCategories) => [...allCategories, category]);
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
