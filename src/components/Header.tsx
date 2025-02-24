// interface HeaderProps {
//   onCartClick: () => void;
//   cartCount: number;
// }

// export default function Header({ onCartClick, cartCount }: HeaderProps) {
//   return (
//     <header className="header">
//       <p className="header__title">My Store</p>
//       <nav className="header__nav">
//         <p onClick={onCartClick} className=" header__nav__text">
//           Cart
//           {cartCount > 0 && (
//             <span className="header__nav__count">{cartCount}</span>
//           )}
//         </p>
//       </nav>
//     </header>
//   );
// }

import { useState } from 'react';
import Modal from './Modal';
import text from '../text.json';

interface HeaderProps {
  onCartClick: () => void;
  cartCount: number;
}

export default function Header({ onCartClick, cartCount }: HeaderProps) {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const toggleInfoModal = () => {
    setIsInfoModalOpen(!isInfoModalOpen);
  };

  return (
    <>
      <header className="header">
        <p className="header__title" onClick={toggleInfoModal}>
          My Store
        </p>
        <nav className="header__nav">
          <p onClick={onCartClick} className="header__nav__text">
            Cart
            {cartCount > 0 && <span className="header__nav__count">{cartCount}</span>}
          </p>
        </nav>
      </header>
      <Modal isOpen={isInfoModalOpen} onClose={toggleInfoModal}>
        <h4>{text.h4}</h4>
        <p>{text.p1}</p>
        <p>{text.p2}</p>
        <p>{text.p3}</p>
        <p>{text.p4}</p>
        <p>{text.p5}</p>
        <button onClick={toggleInfoModal} className="ok-btn">
          Hire me 😃
        </button>
      </Modal>
    </>
  );
}
