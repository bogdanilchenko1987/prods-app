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

import { useState } from "react";
import Modal from "./Modal";

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
            {cartCount > 0 && (
              <span className="header__nav__count">{cartCount}</span>
            )}
          </p>
        </nav>
      </header>
      <Modal isOpen={isInfoModalOpen} onClose={toggleInfoModal}>
        <h2 className="modal-title">Info about this App</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit
        </p>
        <button onClick={toggleInfoModal} className="ok-btn">
          Hire me 😃
        </button>
      </Modal>
    </>
  );
}
