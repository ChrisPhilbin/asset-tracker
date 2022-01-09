import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogoutAndDelectAuthToken } from "../../store/actions/SessionActions";

const TopNav = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(handleLogoutAndDelectAuthToken());
  };

  const loginButton = (
    <Link to="/login">
      <button className="bg-green-400 p-4 text-white rounded font-bold w-24">
        Login
      </button>
    </Link>
  );

  const signoutButton = (
    <button
      className="bg-red-400 p-4 text-white rounded font-bold w-24"
      onClick={handleSignOut}
    >
      Signout
    </button>
  );

  return (
    <div className="mt-4 p-4">
      Top nav
      <div className="float-right mr-4">
        {token ? signoutButton : loginButton}
      </div>
    </div>
  );
};

export default TopNav;
