import { useState } from 'react';
import AddCategory from './components/Input';

const App = () => {

  const [categories, setCategories] = useState<Array<string>>(['one punch']);

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
      <ul>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ul>
    </>
  );
};

export default App;