import * as React from "react";
import { useSelector } from "react-redux";

const AssetDashboard = () => {
  const token = useSelector((state) => state.session.token);

  React.useState(() => {
    //once authenticated, get list of all assets owned by the uid of the decoded token
  }, []);

  if (token) {
    return <div>Asset Dashboard for logged in users</div>;
  }

  return <div>You must be signed in to view this page.</div>;
};

export default AssetDashboard;
