import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/amazon_logo_white.png';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { useAuth, useBasket } from '../context/context';

const Header = () => {
  const {
    state: { basket }
  } = useBasket();
  const {
    state: { authData },
    signout
  } = useAuth();

  const handleAuthentication = () => {
    if (!authData) {
      signout();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" alt="logo" src={logo} />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {authData?.email || 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {authData ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
