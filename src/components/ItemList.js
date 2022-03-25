import styled, { css } from 'styled-components';
import { COLORS } from '../constants/COLORS';

const ItemList = ({ isDoneList, itemList, setItemList }) => {
  const list = itemList.filter((todo) => todo.isDone === isDoneList);

  const handleTodoClick = (e) => {
    const newList = itemList.map((todo) =>
      todo.id === parseInt(e.target.id)
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );

    setItemList(newList);
  };

  const handleBinClick = (e) => {
    const filteredList = itemList.filter(
      (todo) => todo.id !== parseInt(e.target.id)
    );

    setItemList(filteredList);
  };

  return (
    <>
      <ListTitle>
        {isDoneList
          ? `${list.length}개의 할일을 완료했어요`
          : `${list.length}개의 할일이 남아있어요`}
      </ListTitle>
      <List>
        {list.map(({ id, text }) => (
          <TodoWrapper key={id}>
            <TodoText id={id} isDoneList={isDoneList} onClick={handleTodoClick}>
              {text}
            </TodoText>
            <Bin
              src={`${process.env.PUBLIC_URL}/img/bin.png`}
              id={id}
              onClick={handleBinClick}
            />
          </TodoWrapper>
        ))}
      </List>
    </>
  );
};

const ListTitle = styled.div`
  height: 7.5%;
  padding-left: 16px;
  font-size: 20px;

  display: flex;
  align-items: center;
  border-top: 1px solid ${COLORS.border};
  border-bottom: 1px solid ${COLORS.border};
`;

const List = styled.section`
  height: 32.5%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoWrapper = styled.div`
  width: 90%;

  margin: 12px;
  display: flex;
`;

const TodoText = styled.span`
  ${({ isDoneList }) =>
    isDoneList &&
    css`
      color: grey;
      text-decoration: line-through;
    `}

  cursor: pointer;
`;

const Bin = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;

  cursor: pointer;
`;

export default ItemList;
