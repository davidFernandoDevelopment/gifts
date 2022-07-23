import { useState } from 'react';
import CardList from './components/CardList';

import Card from './components/CardList';
import AddCategory from './components/Input';

const App = () => {

  const [categories, setCategories] = useState<Array<string>>([]);

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([
      ...categories,
      category
    ]);
  };

  return (
    <>
      <div>App</div>
      <AddCategory onValue={addCategory} />
      {
        categories.map(category => (
          <CardList key={category} category={category} />
        ))
      }
    </>
  );
};

export default App;