import { useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/COLORS';
import useInput from '../hooks/useInput';
import { ItemListContext } from '../contexts/ItemListContext';

const InputField = () => {
  const [inputText, handleInputChange, resetInputText] = useInput('');
  const { setItemListHandler }: any = useContext(ItemListContext);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (inputText.replace(/\s+/g, '')) {
      const todo = { id: Date.now(), text: inputText, isDone: false };
      setItemListHandler((itemList: any) => [todo, ...itemList]);
    } else {
      alert('할일을 입력해 주세요');
    }

    resetInputText();
  };

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <Input
        value={inputText}
        onChange={handleInputChange}
        spellCheck="false"
        autoFocus
        placeholder="할일을 입력하세요"
      />
      <SubmitBtn onClick={handleFormSubmit}>➕</SubmitBtn>
    </InputForm>
  );
};

const InputForm = styled.form`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 77.5%;
  height: 50%;
  padding-left: 2.5%;

  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  background: ${COLORS.background};

  ::placeholder {
    color: ${COLORS.placeholder};
  }
`;

const SubmitBtn = styled.button`
  width: 10%;
  height: 50%;

  background: none;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};

  cursor: pointer;
`;

export default InputField;
