import styled from 'styled-components';

const InputField = () => {
  return (
    <InputForm>
      <Input />
      <SubmitBtn>+</SubmitBtn>
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
