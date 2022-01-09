import * as React from "react";

const AssetCardDetails = ({ asset }) => {
  return (
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
  );
};

export default AssetCardDetails;
