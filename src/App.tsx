import { useState } from 'react';
import { Input, CardList } from './components';

const App = () => {

  const [categories, setCategories] = useState<Array<string>>([]);

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([
      category,
      ...categories
    ]);
  };

  return (
    <>
      <h3 className='title'>Buscador de gifs</h3>
      <Input onValue={addCategory} />
      {
        categories.map(category => (
          <CardList key={category} category={category} />
        ))
      }
    </>
  );
};

export default App;