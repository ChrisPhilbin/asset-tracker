const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

exports.api = functions.https.onRequest(app);

const {
  loginUser,
  getUserDetail,
  isUserSignedIn,
  signUpUser,
} = require("./api/users");

app.post("/login", loginUser);
app.post("/signup", signUpUser);
app.get("/user", auth, getUserDetail);
app.post("/user/auth", isUserSignedIn);

const { createNewAsset, getUserAssets } = require("./api/assets");

app.get("/assets", auth, getUserAssets);
app.post("/assets/create", auth, createNewAsset);
