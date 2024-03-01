import React from 'react';

function UsrBtn({ isSelected, onSelect, usrId }) {

  return (
    <button className={`w-8 h-8 text-center leading text-xs font-bold rounded-full ${isSelected ? "bg-white border-1 border-violet-600 text-violet-500" : "bg-gray-200 text-black"} hover:bg-white hover:shadow-lg transition-al mr-3`} onClick={() => onSelect(usrId)}>{usrId}</button>

  );
}

export default UsrBtn;