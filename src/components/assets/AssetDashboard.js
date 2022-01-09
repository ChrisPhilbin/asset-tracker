import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAssetsAsync } from "../../store/actions/AssetActions";
import AssetCardDetails from "./AssetCardDetails";
import AssetControls from "./AssetControls";
import Loading from "../util/Loading";

const AssetDashboard = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.assets.assets);
  const loading = useSelector((state) => state.assets.loading);
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

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUserAssetsAsync(token));
    }
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  if (token) {
    return (
      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-5">
          <div className="md:col-span-2 mb-2">
            <AssetControls />
          </div>
          {userAssets.map((asset) => (
            <AssetCardDetails asset={asset} key={asset.assetName} />
          ))}
          {!userAssets.length && filter ? (
            <>
              <p className="text-3xl font-bold">
                No assets found matching {filter}.
              </p>
            </>
          ) : null}
        </div>
      </>
    );
  }

  return <div>You must be signed in to view this page.</div>;
};

export default AssetDashboard;
