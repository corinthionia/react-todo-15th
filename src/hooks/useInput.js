import { useState } from 'react';

const useInput = (initialText) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const resetInputText = () => {
    setInputText('');
  };

  return [inputText, handleInputChange, resetInputText];
};

export default useInput;
