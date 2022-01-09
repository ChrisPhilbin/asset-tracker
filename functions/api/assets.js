function createNewAsset(request, response) {
  const newAsset = {
    assetName: request.body.assetName,
    amount: request.body.amount,
    datePurchased: request.body.datePurchased,
    tags: request.body.tags,
    notes: request.body.notes,
    warrantyInfo: request.body.warrantyInfo,
    userId: request.user.user_id,
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
}
module.exports = { createNewAsset };
