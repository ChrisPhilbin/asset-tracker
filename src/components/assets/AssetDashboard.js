import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAssetsAsync } from "../../store/actions/AssetActions";
import { searchAssets } from "../../store/actions/FilterActions";

const AssetDashboard = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.assets);
  const filter = useSelector((state) => state.filter.nameFilter);
  const token = useSelector((state) => state.session.token);

  let userAssets = [];

  if (filter) {
    assets.forEach((asset) => {
      if (asset.assetName.toLowerCase().includes(filter.toLowerCase())) {
        userAssets.push(asset);
      }
    });
  } else if (!filter) {
    userAssets = assets;
  }

  const searchByName = (searchTerm) => {
    dispatch(searchAssets(searchTerm));
  };

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUserAssetsAsync(token));
    }
  }, [token]);

  if (token) {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5">
          <div className="md:col-span-2 mb-2">
            <Link to="/assets/new">
              <button className="bg-blue-600 rounded m-2 p-3 text-white">
                New asset
              </button>
            </Link>
            <input
              type="text"
              placeholder="search by name..."
              className="rounded placeholder-gray-400"
              onChange={(e) => searchByName(e.target.value)}
            />
          </div>
          {userAssets.map((asset) => (
            <div className="rounded shadow-lg" key={asset.assetName}>
              <img
                className="w-full"
                src="https://firebasestorage.googleapis.com/v0/b/asset-tracker-15d95.appspot.com/o/svs_pb_4000.jpg?alt=media&token=2095415b-7535-406c-b34f-37c2ca22a796"
                alt="Forest"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{asset.assetName}</div>
                <p className="text-gray-700 text-base">{asset.notes}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {asset.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return <div>You must be signed in to view this page.</div>;
};

export default AssetDashboard;
