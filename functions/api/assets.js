const { db, admin } = require("../util/admin");

exports.getUserAssets = async (request, response) => {
  if (!request.user.user_id) {
    return response.status(401).json({ error: "Must be logged in." });
  }
  let userAssets = [];
  db.collection("assets")
    .where("userId", "==", request.user.user_id)
    .get()
    .then((snapShot) => {
      snapShot.forEach((asset) => {
        userAssets.push(asset.data());
      });
      return response.status(200).json(userAssets);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

exports.createNewAsset = async (request, response) => {
  const newAsset = {
    assetName: request.body.assetName,
    amount: request.body.amount,
    datePurchased: request.body.datePurchased,
    tags: request.body.tags,
    notes: request.body.notes,
    warrantyInfo: request.body.warrantyInfo,
    userId: request.user.user_id,
    assetImageUrl: request.body.assetImageUrl,
  };

  db.collection("assets")
    .add(newAsset)
    .then((doc) => {
      const responseAsset = newAsset;
      responseAsset.id = doc.id;
      return response.status(200).json(responseAsset);
    })
    .catch((error) => {
      response.status(500).json({ error: "Unable to save new asset" });
    });
};
