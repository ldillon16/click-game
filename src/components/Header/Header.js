import React from "react";
import "./Header.css";
import 'react-sticky-header/styles.css';

const Header = props => <div className="Header">{props.children}</div>;

export default Header;