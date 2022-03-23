import { useState } from 'react';
import styled from 'styled-components';

const ItemList = ({ itemList, setItemList }) => {
  const { todoList, doneList } = itemList;
  const [clickedTodo, setClickedTodo] = useState([]);

  const handleTodoClick = (e) => {
    // const filteredList = todoList.index(
    //   (todo) => todo.id !== parseInt(e.target.id)
    // );

    setClickedTodo(todoList.filter(({ id }) => id === parseInt(e.target.id)));

    console.log(clickedTodo);
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
