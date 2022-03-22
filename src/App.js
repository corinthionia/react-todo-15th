import { useState } from 'react';
import styled from 'styled-components';
import InputField from './components/InputField';
import ItemList from './components/ItemList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  return (
    <Wrapper>
      <Header>투두리스트</Header>
      <InputField todoList={todoList} setTodoList={setTodoList} />
      <ItemList todoList={todoList} doneList={doneList} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 350px;
  height: 700px;
  background: pink;
`;

const Header = styled.header`
  height: 10%;
  display: flex;
  align-items: center;
  background: cornflowerblue;
  font-size: 24px;
`;

export default App;
