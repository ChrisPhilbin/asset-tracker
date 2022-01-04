import * as React from "react";
import { useSelector } from "react-redux";

const AssetDashboard = () => {
  const token = useSelector((state) => state.session.token);

  if (token) {
    return <div>Asset Dashboard for logged in users</div>;
  }

  return <div>You must be signed in to view this page.</div>;
};

export default AssetDashboard;
