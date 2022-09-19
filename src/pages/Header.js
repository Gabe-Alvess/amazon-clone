import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import searchIcon from "../images/searchIcon.png";
import placeIcon from "../images/place.png";
import shopCart from "../images/shopCart.png";
import flag from "../images/flag.png";
import { useStateValue } from "../StateProvider";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  const [{ cart }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <div className="header__navLogo">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>
      </Link>

      <div className="header__navPlace">
        <Link to="/login" className="header__link">
          <div className="header__placeIcon">
            <img className="placeIcon" src={placeIcon} alt="" />
          </div>
          <div className="header__optionDeliver">
            <span className="header__optionLineDeliverTo">Deliver to</span>
            <span className="header__optionLineBelgium">Belgium</span>
          </div>
        </Link>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Link to="/">
          <div className="header__searchBox">
            <img className="header__searchIcon" src={searchIcon} alt="" />
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/a" className="header__link">
          <div className="header__optionFlag">
            <img className="header__optionUsFlag" src={flag} alt="US Flag" />
            <span className="header__optionLineTwo header__optionEnLine">EN<ArrowDropDownIcon className="arrowDropDown1" /></span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option header__optionSingIn">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo header__optionAccountLine">Account & Lists<ArrowDropDownIcon className="arrowDropDown2" /></span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option header__optionReturns">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionShopCart">
          <img className="header__shopCart" src={shopCart} alt="" />
          <span className="header__shopCartCount">{cart?.length}</span>
          <span className="header__optionLineTwo header__optionCart">Cart</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
