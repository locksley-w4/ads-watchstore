import React, { useContext, useEffect, useRef } from "react";
import classes from "./Sidebar.module.css";
import logo from "../../assets/Logo Mark.png";
import { Link } from "react-router-dom";
import anime from "animejs";
import { AuthContext } from "../../../context/AuthContextProvider";

const Sidebar = ({ setSidebarVisible, visible }) => {
  const { logout } = useContext(AuthContext);
  const sidebarRef = useRef(null);
  let animationDuration = 200;
  function hideSidebar(e) {
    anime({
      targets: sidebarRef.current,
      left: "-100%",
      duration: animationDuration,
      easing: "linear",
    });
    setTimeout(() => {
      setSidebarVisible(false);
    }, animationDuration);
  }

  useEffect(() => {
    if (visible) {
      anime({
        targets: sidebarRef.current,
        left: 0,
        duration: animationDuration,
        easing: "linear",
      });
    }
    return () => {
      // setSidebarVisible(false)
    };
  }, [visible]);

  return (
    <div
      className={`${classes.sidebar} ${visible ? classes.active : ""}`}
      onClick={hideSidebar}
    >
      <div
        className={classes.sidebarContainer}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        ref={sidebarRef}
      >
        <div className="logo">
          <img src={logo} alt="Logo ADS Watch" />
        </div>
        <ul>
          <li>
            <Link onClick={hideSidebar} to="/profile" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-user"} />
              Profile
            </Link>
          </li>
          <li>
            <Link onClick={hideSidebar} to="/" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-location-dot"} />
              My Addresses
            </Link>
          </li>
          <li>
            <Link onClick={hideSidebar} to="/" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-credit-card"} />
              My Cards
            </Link>
          </li>
          <li>
            <Link onClick={hideSidebar} to="/" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-table-list"} />
              My Orders
            </Link>
          </li>
          <li>
            <Link onClick={hideSidebar} to="/" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-gear"} />
              Settings
            </Link>
          </li>
          <li>
            <Link onClick={hideSidebar} to="/" className={classes.sidebarLink}>
              <i className={classes.icon + " fa fa-store"} />
              Nearby Stores
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                logout();
                hideSidebar();
              }}
              to="/login"
              className={classes.sidebarLink}
            >
              <i className={classes.icon + " fa fa-circle-left"} />
              Logout
            </Link>
          </li>
        </ul>
        <hr />
        <Link style={{ marginTop: 10 }}>Privacy Policy</Link>
        <Link style={{ marginTop: 10 }}>Support & FAQs</Link>
        <Link style={{ marginTop: "auto" }} className={classes.sidebarLink}>
          <i className="fa fa-moon" />
          Dark Mode <input type="checkbox" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
