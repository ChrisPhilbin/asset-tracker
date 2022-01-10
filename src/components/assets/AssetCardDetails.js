import * as React from "react";

const AssetCardDetails = ({ asset }) => {
  return (
    <div className="rounded shadow-lg" key={asset.assetName}>
      <img className="w-full" src={asset.assetImageUrl} alt={asset.assetName} />
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
