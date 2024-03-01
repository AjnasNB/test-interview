import React from 'react';

function ShoppingList({ items, userId }) {
    return (
        <ul className='border-t'>
        
            {items.map((listItem, index) => {
                if (listItem.id !== userId) return null;
                else
                    return (
                        <li className='py-3 border-b px-4' key={index}>
                            {listItem.item}
                        </li>
                    );
            })}
        </ul>

    );
}

export default ShoppingList;