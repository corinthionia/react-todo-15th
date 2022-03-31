import { createContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

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

  const setItemListHandler = (itemList: any) => {
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
