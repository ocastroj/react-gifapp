import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Cyberpunk']);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
    setCategories( [newCategory, ...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        <button onClick={ onAddCategory }>Agregar</button>

        { categories.map( (category) => (
            <GifGrid key={ category } category={ category }/>
        ))
        }
    </>
  )
}
