import React from 'react'
import './index.css'

const Modal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.findBalances();
        props.setShow(false);
    }

    return (
        <>
            <div className={`modal ${props.show ? 'show' : ''}`} onClick={() => props.setShow(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">Address</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <input
                                className="address-data"
                                onChange={(e)=>props.setAddress(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">submit</button>
                            <button className="btn btn-danger" onClick={(e)=>props.setShow(false)}>close</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;