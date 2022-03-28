import { createContext, useEffect, useState } from 'react';

export const ItemListContext = createContext({
  state: { itemList: [] },
  actions: {
    setItemList: () => {},
  },
});

const ItemListProvider = ({ children }) => {
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem('itemList')) || []
  );

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  const setItemListHandler = (itemList) => {
    setItemList(itemList);
  };

  return (
    <ItemListContext.Provider value={{ itemList, setItemListHandler }}>
      {children}
    </ItemListContext.Provider>
  );
};

export default ItemListProvider;
