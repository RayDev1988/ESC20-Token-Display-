import React, { useState } from 'react';
import { IModal } from '../common/types';
import './index.css';

const Modal: React.FC<IModal> = ({ findBalances, setShow, show }) => {
  const [inputText, setInputText] = useState<string>('');
  const handleSubmit = () => {
    findBalances(inputText);
    setShow(false);
  };

  return (
    <>
      <div className={`modal ${show ? 'show' : ''}`} onClick={() => setShow(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Address</h4>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="modal-body">
              <input
                className="address-data"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={() => handleSubmit()}>
                {' '}
                submit{' '}
              </button>
              <button className="btn btn-danger" onClick={() => setShow(false)}>
                {' '}
                close{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
