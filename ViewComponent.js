// ViewComponent.js
import React from 'react';

const ViewComponent = ({ queue }) => {
  return (
    <div className="view-component">
      {queue.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ViewComponent;
