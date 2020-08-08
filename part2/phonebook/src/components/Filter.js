import React from 'react';

const Filter = ({newSearchName, handleSearchNameChange}) => {
  return (
    <div>
      filter shown with <input type="text" value={newSearchName} onChange={handleSearchNameChange} />
    </div>
  );
};

export default Filter;