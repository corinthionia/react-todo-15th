import styled from 'styled-components';

const ItemList = ({ todoList }) => {
  return (
    <>
      <ListTitle>TO DO</ListTitle>
      <List></List>
      <ListTitle>DONE</ListTitle>
      <List></List>
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
