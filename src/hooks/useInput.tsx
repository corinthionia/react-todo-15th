import { useState } from 'react';

const useInput = (initialText: any) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const resetInputText = () => {
    setInputText('');
  };

  return [inputText, handleInputChange, resetInputText];
};

export default useInput;
