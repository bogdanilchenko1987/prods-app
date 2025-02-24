interface HeaderProps {
  onCartClick: () => void;
  cartCount: number;
}

export default function Header({ onCartClick, cartCount }: HeaderProps) {
  return (
    <header className="header">
      <p className="header__title">My Store</p>
      <nav className="header__nav">
        <p onClick={onCartClick} className=" header__nav__text">
          Cart
          {cartCount > 0 && (
            <span className="header__nav__count">{cartCount}</span>
          )}
        </p>
      </nav>
    </header>
  );
}
