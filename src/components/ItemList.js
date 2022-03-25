import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../constants/COLORS';

const ItemList = ({
  isDoneList,
  itemList,
  handleBinClick,
  handleTodoClick,
}) => {
  const filteredList = itemList.filter((todo) => todo.isDone === isDoneList);

  return (
    <>
      <ListTitle>
        {isDoneList
          ? `${filteredList.length}개의 할일을 완료했어요`
          : `${filteredList.length}개의 할일이 남아있어요`}
      </ListTitle>
      <List>
        {filteredList.map(({ id, text }) => (
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
`;

const TodoWrapper = styled.div`
  width: 90%;
  margin: 12px;

  display: flex;
  align-items: center;
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

export default React.memo(ItemList);
