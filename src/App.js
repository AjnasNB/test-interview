import React from 'react';
import ShoppingList from './components/ShoppingList.js';
import NewItemForm from './components/NewItemForm';
import UsrBtn from './components/UsrBtn';

function App() {
  const [items, setItems] = React.useState([]);
  const [user, setUser] = React.useState('');
  const [selectedUserId, setSelectedUserId] = React.useState(1);
  function handleAddItem(value) {
    const arry=[...items]
    arry.push(value);
    setItems(arry);
    console.log(items)
  }
//Uncaught TypeError: Cannot read properties of undefined (reading 'name')

React.useEffect(() => {
  const fetch = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/${selectedUserId}`;
      const res = await fetch(url);
      const json = await res.json();

      setUser(json);
    } catch (error) {
      console.log(error);
    }
  };

  fetch();
}, [selectedUserId]); 

  return (
    <>
      <div className='flex justify-center items-center bg-gray-100 w-full h-screen overflow-hidden'>
        <div>

          <div className='bg-white border rounded-lg shadow-md overflow-hidden'>
            <div className='text-center mb-3 p-4'>
              <h1 className='font-bold text-violet-600'>Shopping List</h1>
                <p className='text-sm text-gray-500'>Welcome <b>{user.name}</b></p>
            </div>
            {items.length > 0 && <ShoppingList items={items} userId={selectedUserId} />}
            <NewItemForm handleAddItem={handleAddItem} userId={selectedUserId} />
          </div>
          <div className='flex mt-4 items-center'>
            <div className='mr-1'>
              <small>Select User: </small>
            </div>
            <UsrBtn usrId={1} onSelect={(id) => setSelectedUserId(id)} isSelected={selectedUserId === 1} />
            <UsrBtn usrId={2} onSelect={(id) => setSelectedUserId(id)} isSelected={selectedUserId === 2} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;