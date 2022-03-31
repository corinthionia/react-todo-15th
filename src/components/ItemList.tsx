import { useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants/COLORS';
import { ItemListContext } from '../contexts/ItemListContext';
import Item from './Item';

const ItemList = ({ isDoneList }) => {
  const { itemList, setItemListHandler } = useContext(ItemListContext);

  const filteredList = itemList.filter((item) => item.isDone === isDoneList);

  const handleTextClick = (e) => {
    const newList = (filteredList) =>
      filteredList.map((item) =>
        item.id === parseInt(e.target.id)
          ? { ...item, isDone: !item.isDone }
          : item
      );

    setItemListHandler(newList);
  };

  const handleDeleteBtnClick = (e) => {
    const newList = (filteredList) =>
      filteredList.filter((todo) => todo.id !== parseInt(e.target.id));

    setItemListHandler(newList);
  };

  return (
    <>
      <ListTitle>
        {isDoneList
          ? `${filteredList.length}개의 할일을 완료했어요`
          : `${filteredList.length}개의 할일이 남아있어요`}
      </ListTitle>
      <List>
        {filteredList.map(({ id, text }) => (
          <Item
            key={id}
            id={id}
            text={text}
            isDoneList={isDoneList}
            handleTextClick={handleTextClick}
            handleDeleteBtnClick={handleDeleteBtnClick}
          />
        ))}
      </List>
    </>
  );
};

const ListTitle = styled.div`
  height: 7.5%;
  padding-left: 16px;

  display: flex;
  align-items: center;

  font-size: 20px;

  border-top: 1px solid ${COLORS.border};
  border-bottom: 1px solid ${COLORS.border};
`;

const List = styled.section`
  height: 32.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${COLORS.scrollbar};
    background-clip: padding-box;
    border-radius: 10px;
    border: 0.25rem solid transparent;
  }
`;

export default ItemList;
