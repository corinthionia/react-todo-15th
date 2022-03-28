const useLocalStorage = () => {
  const getItemsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('itemList'));
  };

  const setItemstoLocalStorage = (itemList) => {
    return localStorage.setItem('itemList', JSON.stringify(itemList));
  };

  return [getItemsFromLocalStorage, setItemstoLocalStorage];
};

export default useLocalStorage;
