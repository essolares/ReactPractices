import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCats = ['all',...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems,setMenuItems]= useState(items);
  const [cateogries,setCategories] = useState(allCats);

  const filterItems = (category) => {
    if (category==='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category)
    setMenuItems(newItems);
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Restaurant Menu</h2>
        <div className="underline">
        </div>
      </div>
        <Categories categories={cateogries} filterItems={filterItems}/>
        <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
