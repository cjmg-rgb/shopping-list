import { useState } from 'react';

import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from './components/Footer';
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";

function App() {

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = items => {
    setItems(items);
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }

  const itemStructure = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item};
    const shoppingList = [...items, newItem]
    setAndSaveItems(shoppingList)
  };  
  
  const handleDelete = id => {
    const shoppingList = items.filter(item => item.id !== id);
    setAndSaveItems(shoppingList)

  };

  const handleCheck = id => {
    const shoppingList = items.map(item => (item.id === id) ? {...item, checked: !item.checked} : item);
    setAndSaveItems(shoppingList)
  }

  const handleAdd = e => {
    e.preventDefault();
    if(!newItem) return;
    itemStructure(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddItem 
          handleAdd={handleAdd}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
        <Content 
          items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
          setItems={setItems}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
        
      </div>
      <Footer
        items={items}
      />
    </div>
  );
}

export default App;
