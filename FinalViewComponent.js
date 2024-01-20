// FinalViewComponent.js
import React from 'react';
import { Button, Modal } from 'antd';

const FinalViewComponent = ({ queue, onEndClick, onResetClick }) => {
  const handleEndClick = () => {
    if (queue.length === 0) {
      Modal.success({
        content: 'Success! Queue is empty.',
      });
    } else {
      Modal.confirm({
        title: 'Wait for Queue to Empty',
        content: 'Do you want to wait until the queue is empty?',
        onOk: () => onEndClick(),
      });
    }
  };

  const handleResetClick = () => {
    Modal.confirm({
      title: 'Reset Confirmation',
      content: 'Are you sure you want to reset everything?',
      onOk: onResetClick,
    });
  };

  return (
    <div className="final-view-component">
      <Button type="primary" onClick={handleEndClick}>
        End
      </Button>
      <Button type="danger" onClick={handleResetClick}>
        Reset
      </Button>
    </div>
  );
};

export default FinalViewComponent;
