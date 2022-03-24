import { useState } from 'react';
import styled from 'styled-components';
import InputField from './components/InputField';
import ItemList from './components/ItemList';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>투두리스트</Header>
        <InputField itemList={itemList} setItemList={setItemList} />
        <ItemList itemList={itemList} setItemList={setItemList} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  width: 350px;
  height: 700px;

  border-radius: 16px;
  border: 1px solid #ececec;
  overflow: hidden;
`;

const Header = styled.header`
  height: 10%;
  font-size: 28px;
  padding-left: 16px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #ececec;
`;

export default App;
