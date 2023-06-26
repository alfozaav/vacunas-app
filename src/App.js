import React, { useState, useEffect, useDebugValue } from 'react';
import RegisterForm from './components/RegisterForm';
import Register from './components/Register';
import './App.css';

function App() {

  let initialRegister = JSON.parse(localStorage.getItem('items'));
  if (!initialRegister) { initialRegister = []; }

  const [items, getItems] = useState(initialRegister);

  useEffect(() => {
    let initialRegister = JSON.parse(localStorage.getItem('items'));
    if (initialRegister) {
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      localStorage.setItem('items', JSON.stringify([]));
    }
  }, [items])

  const createRegister = item => {
    getItems([
      ...items,
      item
    ])
  }

  const deleteItem = id => {
    const newItems = items.filter( item => item.id !== id);
    getItems(newItems);
  }

  const title = items.length === 0 ? 'No hay registros' : 'Administra los registros:';

  return (
    <div className='app'>
      <h1>Registros de la Vacuna Moderna</h1>
      <div className='app-body'>
        <div className='app-form'>
          <RegisterForm createRegister={createRegister} />
        </div>
        <div className='app-list'>
          <h2>{title}</h2>
          <div className='cards-container'>
            { items.map(item => (
              <Register key={item.id} register={item} deleteRegister={deleteItem} />
            )) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
