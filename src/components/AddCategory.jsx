import { useState } from 'react';

export const AddCategory = ( { onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value <= 1) return;

    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(value);
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Buscar Gifs" 
          value={ inputValue }
          onChange= { onInputChange }
        />
    </form>
  )
}
