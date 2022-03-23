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

  const handleBinClick = (e) => {
    const filteredList = itemList.filter(
      (todo) => todo.id !== parseInt(e.target.id)
    );

    setItemList(filteredList);
  };

  return (
    <>
      <ListTitle>{`${todoList.length}개의 할일이 남아 있어요`}</ListTitle>
      <List>
        {todoList.map(({ id, text }) => (
          <TodoWrapper key={id}>
            <TodoText id={id} onClick={handleTodoClick}>
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
      <ListTitle>{`${doneList.length}개의 할일을 완료했어요`}</ListTitle>
      <List>
        {doneList.map(({ id, text }) => (
          <TodoWrapper key={id}>
            <TodoText id={id} onClick={handleTodoClick}>
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

const TodoWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const TodoText = styled.span``;

const Bin = styled.img`
  width: 16px;
  height: 16px;
`;

export default ItemList;
