// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
// Add this import statement at the top of App.js
import { Modal } from 'antd';
import Header from './Header';
import InputComponent from './InputComponent';
import ViewComponent from './ViewComponent';
import FinalViewComponent from './FinalViewComponent';

const App = () => {
  const [queue, setQueue] = useState([]);

  const addToQueue = (text) => {
    setQueue((prevQueue) => [...prevQueue, text]);
  };

  const removeFromQueue = () => {
    setQueue((prevQueue) => {
      const updatedQueue = [...prevQueue];
      const removedItem = updatedQueue.shift();
      Modal.info({
        content: `Popped from queue: ${removedItem}`,
      });
      return updatedQueue;
    });
  };

  const handleEndClick = () => {
    const intervalId = setInterval(() => {
      removeFromQueue();
      if (queue.length === 0) {
        clearInterval(intervalId);
        Modal.success({
          content: 'Success! Queue is empty.',
        });
      }
    }, 10000);
  };

  const handleResetClick = () => {
    setQueue([]);
    Modal.success({
      content: 'Success! All components reset.',
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      removeFromQueue();
    }, 10000);

    return () => clearInterval(intervalId);
  }, [queue]);

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="left-section">
          <div className="input-view-container">
            <InputComponent onAdd={addToQueue} />
            <ViewComponent queue={queue} />
          </div>
        </div>
        <div className="right-subsection">
          <FinalViewComponent
            queue={queue}
            onEndClick={handleEndClick}
            onResetClick={handleResetClick}
          />
        </div>
      </div>
    </div>
  );
};

export default App;


