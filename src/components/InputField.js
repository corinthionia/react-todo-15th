import { useState } from 'react';
import styled from 'styled-components';

const InputField = ({ todoList, setTodoList }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const todo = { id: Date.now(), text: inputText };
    setTodoList([...todoList, todo]);

    setInputText('');
  };

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <Input value={inputText} onChange={handleInputChange} />
      <SubmitBtn onClick={handleFormSubmit}>+</SubmitBtn>
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
`;

const SubmitBtn = styled.button`
  width: 10%;
  background: none;
`;

export default InputField;
