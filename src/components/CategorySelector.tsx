import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState } from "../atoms";

const Selector = styled.select`
  background-color: transparent;
  text-align: center;
  width: 80%;
  height: 50px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
`;

const Option = styled.option`
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  font-size: 13px;
  :focus {
    border: 1px solid ${(props) => props.theme.textColor};
  }
`;

const CategorySelector = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Selector value={category} onInput={onInput}>
      <Option value={Categories.TO_DO}>To Do</Option>
      <Option value={Categories.DOING}>Doing</Option>
      <Option value={Categories.DONE}>Done</Option>
    </Selector>
  );
};

export default CategorySelector;
