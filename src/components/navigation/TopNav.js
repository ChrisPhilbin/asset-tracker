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
      <Link to="/">
        <span className="m-2 text-2xl text-gray-800 font-bold">Home</span>
      </Link>
      {token ? (
        <>
          <Link to="/assets">
            <span className="m-2 text-2xl text-gray-800 font-bold">
              My assets
            </span>
          </Link>
          <Link to="/assets/new">
            <span className="m-2 text-2xl text-gray-800 font-bold">
              Add new asset
            </span>
          </Link>
        </>
      ) : null}
      <div className="float-right mr-4">
        {token ? signoutButton : loginButton}
      </div>
    </div>
  );
};

export default TopNav;
