import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from './constants/COLORS';
import { GlobalStyle } from './style/GlobalStyle';
import InputField from './components/InputField';
import ItemList from './components/ItemList';

function App() {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem('itemList')) || []
  );

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  const handleTodoClick = useCallback(
    (e) => {
      const newList = (itemList) =>
        itemList.map((todo) =>
          todo.id === parseInt(e.target.id)
            ? { ...todo, isDone: !todo.isDone }
            : todo
        );

      setItemList(newList);
    },
    [setItemList]
  );

  const handleBinClick = useCallback(
    (e) => {
      const filteredList = (itemList) =>
        itemList.filter((todo) => todo.id !== parseInt(e.target.id));

      setItemList(filteredList);
    },
    [setItemList]
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>투두리스트</Header>
        <InputField itemList={itemList} setItemList={setItemList} />
        <ItemList
          isDoneList={false}
          itemList={itemList}
          handleBinClick={handleBinClick}
          handleTodoClick={handleTodoClick}
        />
        <ItemList
          isDoneList={true}
          itemList={itemList}
          handleBinClick={handleBinClick}
          handleTodoClick={handleTodoClick}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  width: 350px;
  height: 700px;

  border-radius: 16px;
  border: 1px solid ${COLORS.border};
  overflow: hidden;

  background: ${COLORS.background};
`;

const Header = styled.header`
  height: 10%;
  font-size: 28px;
  padding-left: 16px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${COLORS.border};
`;

export default App;
