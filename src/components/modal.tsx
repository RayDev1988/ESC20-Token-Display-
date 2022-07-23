import React, { FormEvent } from 'react'
import { IModal } from '../common/types';
import './index.css'

const Modal: React.FC<IModal> = ({
  findBalances,
  setShow,
  show,
  setAddress,
}) => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    findBalances();
    setShow(false);
  }

  return (
    <>
      <div className={`modal ${show ? 'show' : ''}`} onClick={() => setShow(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Address</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input
                className="address-data"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">submit</button>
              <button className="btn btn-danger" onClick={(e) => setShow(false)}>close</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal;