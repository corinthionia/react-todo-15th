import styled from 'styled-components';

const ItemList = ({ todoList, doneList, setTodoList, setDoneList }) => {
  return (
    <>
      <ListTitle>{`TO DO (${todoList.length})`}</ListTitle>
      <List>
        {todoList.map((todo) => (
          <div>{todo.text}</div>
        ))}
      </List>
      <ListTitle>{`DONE (${doneList.length})`}</ListTitle>
      <List>
        {doneList.map((todo) => (
          <div>{todo.text}</div>
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
