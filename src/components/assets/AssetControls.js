import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchAssets } from "../../store/actions/FilterActions";

const AssetControls = () => {
  const dispatch = useDispatch();

  const searchByName = (searchTerm) => {
    dispatch(searchAssets(searchTerm));
  };

  return (
    <>
      <Link to="/assets/new">
        <button className="bg-blue-600 rounded m-2 p-3 text-white">
          New asset
        </button>
      </Link>
      <input
        type="text"
        placeholder="search by name..."
        className="rounded placeholder-gray-400"
        maxLength={15}
        onChange={(e) => searchByName(e.target.value)}
      />
    </>
  );
};

export default AssetControls;
