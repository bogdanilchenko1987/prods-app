import { useState } from "react";
import useStore from "../store";
import Modal from "./Modal";
import { Product } from "../types/Product";
import { filterOrder, calculateTotal } from "../utils/filteredOrder";

interface SidebarProps {
  order: Product[];
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ order, isOpen, onClose }: SidebarProps) {
  const { clearOrder } = useStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const filteredOrder = filterOrder(order);
  const total = calculateTotal(filteredOrder);

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
  };

  const handleOk = () => {
    clearOrder();
    toggleCheckout();
    onClose();
  };

  return (
    <>
      {isOpen && <div className="modal-overlay" onClick={onClose}></div>}
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__content">
          <div className="sidebar-close">
            <button className="sidebar-close__btn" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sidebar-close__btn__svg"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
          </div>
          <h2 className="sidebar__content__title">Cart Info</h2>
          {filteredOrder.map((o) => (
            <div key={o.id} className="sidebar__content__order-item">
              <p>
                {o.title.slice(0, 25)} : ${o.price} : x{o.q}
              </p>
            </div>
          ))}
          {Boolean(total) && (
            <p className="sidebar__content__total">
              Total: ${total.toFixed(2)}
            </p>
          )}
          <button
            disabled={filteredOrder.length === 0}
            onClick={toggleCheckout}
            className={`sidebar__content__checkout-btn ${
              filteredOrder.length === 0 ? "disabled" : "enabled"
            }`}
          >
            Checkout
          </button>
        </div>
      </div>

      <Modal isOpen={isCheckoutOpen} onClose={toggleCheckout}>
        <h2 className="modal-title">Order Summary</h2>
        {filteredOrder.map((o) => (
          <div key={o.id} className="sidebar__content__order-item">
            <p>
              {o.title.slice(0, 25)} : ${o.price} : x{o.q}
            </p>
          </div>
        ))}
        <p className="sidebar__content__total">Total: ${total.toFixed(2)}</p>

        <button onClick={handleOk} className="ok-btn">
          Ok
        </button>
      </Modal>
    </>
  );
}
