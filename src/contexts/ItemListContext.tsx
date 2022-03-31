import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { IItem, ItemListType } from '../types/types';

export const ItemListContext = createContext<any>({
  state: { itemList: [] },
  actions: {
    setItemList: () => {},
  },
});

const ItemListProvider = ({ children }) => {
  const [getItemsFromLocalStorage, setItemstoLocalStorage]: any =
    useLocalStorage();
  const [itemList, setItemList]: any = useState(
    getItemsFromLocalStorage() || []
  );

  const setItemListHandler = (itemList: ItemListType) => {
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
