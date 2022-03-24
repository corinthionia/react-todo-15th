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
      <Input value={inputText} onChange={handleInputChange} />
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
  width: 80%;
  height: 50%;
  border-radius: 8px;
  border: 1px solid #ececec;
`;

const SubmitBtn = styled.button`
  width: 10%;
  height: 50%;

  background: none;
  border-radius: 8px;
  border: 1px solid #ececec;
`;

export default InputField;
