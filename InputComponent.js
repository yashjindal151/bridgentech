
// import React, { useState } from 'react';
// import { Input, Button } from 'antd';

// const InputComponent = ({ onAdd }) => {
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const handleAddClick = () => {
//     if (inputText.trim() !== '') {
//       onAdd(inputText);
//       setInputText('');
//     }
//   };

//   return (
//     <div className="input-component">
//       <div className="input-container">
//         <Input value={inputText} onChange={handleInputChange} />
//         <Button type="primary" onClick={handleAddClick}>
//           Add
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default InputComponent;

// InputComponent.js
import React, { useState } from 'react';
import { Input, Button } from 'antd';

const InputComponent = ({ onAdd }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== '') {
      onAdd(inputText);
      setInputText('');
    }
  };

  return (
    <div className="input-component">
      <div className="input-container">
        <Input value={inputText} onChange={handleInputChange} />
        <Button type="primary" onClick={handleAddClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default InputComponent;

