import { useState } from 'react';
import styled from 'styled-components';

const InputField = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const todo = { id: Date.now(), text: inputText, isDone: false };
    setItemList([todo, ...itemList]);

    setInputText('');
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
  border-radius: 8px;
  border: 1px solid #ececec;
  padding-left: 2.5%;
  background: rgba(255, 255, 255, 0.1);

  ::placeholder {
    color: #ececec;
  }
`;

const SubmitBtn = styled.button`
  width: 10%;
  height: 50%;

  background: none;
  border-radius: 8px;
  border: 1px solid #ececec;

  &:hover {
    cursor: pointer;
  }
`;

export default InputField;
