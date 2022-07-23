import { useState } from 'react';
import DarkMode from '../DarkMode';
import Modal from './modal';

const Header = ({ findBalances }: { findBalances: (address: string) => void }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        {' '}
        Add adress{' '}
      </button>
      <Modal show={show} setShow={setShow} findBalances={findBalances} />
      <DarkMode />
    </div>
  );
};

export default Header;
