import styled from 'styled-components';
import { COLORS } from '../constants/COLORS';
import Item from './Item';

const ItemList = ({ isDoneList, itemList, setItemList }) => {
  const filteredList = itemList.filter((item) => item.isDone === isDoneList);

  const handleTextClick = (e) => {
    const newList = filteredList.map((item) =>
      item.id === parseInt(e.target.id)
        ? { ...item, isDone: !item.isDone }
        : item
    );

    setItemList(newList);
  };

  const handleDeleteBtnClick = (e) => {
    const newList = filteredList.filter(
      (todo) => todo.id !== parseInt(e.target.id)
    );

    setItemList(newList);
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

// const TodoWrapper = styled.div`
//   width: 90%;
//   margin: 12px;

//   display: flex;
//   align-items: center;
// `;

// const TodoText = styled.span`
//   ${({ isDoneList }) =>
//     isDoneList &&
//     css`
//       color: ${COLORS.lightgrey};
//       text-decoration: line-through;
//     `}

//   cursor: pointer;
// `;

// const DeleteBtn = styled.img`
//   width: 16px;
//   height: 16px;
//   margin-left: 8px;

//   cursor: pointer;
// `;

export default ItemList;
