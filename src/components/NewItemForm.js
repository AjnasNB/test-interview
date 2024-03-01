import React from 'react';

function NewItemForm({ handleAddItem, userId }) {
  const [value, setValue] = React.useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddItem({ id: userId, item: value });
        console.log(handleAddItem)
      }}
      className='flex'
    >
      {/* We'll touch on this ID stuff later too! */}

      <input
        value={value}
        className='px-4 py-2'
        onChange={event => setValue(event.target.value)}
        placeholder='Type an item name here'
      />
      <button className='bg-violet-500 p-3 text-white font-bold hover:bg-violet-600' >
        Add Item
      </button>
    </form>
  );
}

export default NewItemForm;