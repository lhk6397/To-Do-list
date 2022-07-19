import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState, categoryState } from "../atoms";

const Selector = styled.select`
  background-color: transparent;
  text-align: center;
  width: 80%;
  height: 50px;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.accentColor};
    border-color: ${(props) => props.theme.accentColor};
    transform: translateY(3px);
  }
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
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <Selector value={category} onInput={onInput}>
      {/* <Option value={"TO_DO"}>To Do</Option>
      <Option value={"DOING"}>Doing</Option>
      <Option value={"DONE"}>Done</Option> */}
      {categories.map((aCategory) => (
        <Option value={aCategory}>{aCategory}</Option>
      ))}
    </Selector>
  );
};

export default CategorySelector;
