import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAssetsAsync } from "../../store/actions/AssetActions";

const AssetDashboard = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const userAssets = useSelector((state) => state.assets.assets);

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUserAssetsAsync(token));
    }
  }, [token]);

  console.log(userAssets, "user assets");

  if (token) {
    return (
      <>
        <div>Asset Dashboard for logged in users</div>
        <div>
          {userAssets.map((asset) => (
            <span>{asset.assetName}</span>
          ))}
        </div>
      </>
    );
  }

  return <div>You must be signed in to view this page.</div>;
};

export default AssetDashboard;
