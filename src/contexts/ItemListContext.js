import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ItemListContext = createContext({
  state: { itemList: [] },
  actions: {
    setItemList: () => {},
  },
});

const ItemListProvider = ({ children }) => {
  const [getItemsFromLocalStorage, setItemstoLocalStorage] = useLocalStorage();
  const [itemList, setItemList] = useState(getItemsFromLocalStorage() || []);

  const setItemListHandler = (itemList) => {
    setItemList(itemList);
  };

  useEffect(() => {
    setItemstoLocalStorage(itemList);
  }, [itemList]);

  return (
    <ItemListContext.Provider value={{ itemList, setItemListHandler }}>
      {children}
    </ItemListContext.Provider>
  );
};

export default ItemListProvider;
