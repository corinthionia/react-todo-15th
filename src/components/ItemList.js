import { useState } from 'react';
import styled from 'styled-components';

const ItemList = ({ itemList, setItemList }) => {
  const todoList = itemList.filter((todo) => todo.isDone === false);
  const doneList = itemList.filter((todo) => todo.isDone === true);

  const handleTodoClick = (e) => {
    const newList = itemList.map((todo) =>
      todo.id === parseInt(e.target.id)
        ? { ...todo, isDone: !todo.isDone }
        : todo
    );

    setItemList(newList);
  };

  return (
    <>
      <ListTitle>{`TO DO (${todoList.length})`}</ListTitle>
      <List>
        {todoList.map(({ id, text }) => (
          <div key={id} id={id} onClick={handleTodoClick}>
            {text}
          </div>
        ))}
      </List>
      <ListTitle>{`DONE (${doneList.length})`}</ListTitle>
      <List>
        {doneList.map(({ id, text }) => (
          <div key={id} id={id} onClick={handleTodoClick}>
            {text}
          </div>
        ))}
      </List>
    </>
  );
};

const ListTitle = styled.div`
  height: 5%;
  background: yellow;
  display: flex;
  align-items: center;
`;

const List = styled.section`
  height: 35%;
  background: powderblue;
  overflow: auto;
`;

export default ItemList;
