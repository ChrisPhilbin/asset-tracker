import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateNewAssetAsync } from "../../store/actions/AssetActions";
import { app } from "../../firebase";

const AddNewAsset = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.session.token);

  const [amount, setAmount] = React.useState("");
  const [datePurchased, setDatePurchased] = React.useState("");
  const [assetImageUrl, setAssetImageUrl] = React.useState("");
  const [receiptImage, setReceiptImage] = React.useState("");
  const [receiptImageUrl, setReceiptImageUrl] = React.useState("");
  const [assetName, setAssetName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [warrantyInfo, setWarrantyInfo] = React.useState("");

  const handleSubmit = () => {
    const newAsset = {
      amount,
      datePurchased,
      receiptImage,
      assetName,
      notes,
      tags,
      warrantyInfo,
      assetImageUrl,
    };

    dispatch(fetchCreateNewAssetAsync(newAsset, token));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags((prevTags) => [...prevTags, e.target.value]);
    }
  };

  const removeTag = (tag) => {
    const index = tags.indexOf(tag);
    if (index > -1) {
      tags.splice(index, 1);
      setTags([...tags]);
    }
  };

  const uploadAssetImage = async (file) => {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setAssetImageUrl(await fileRef.getDownloadURL());
  };

  console.log(assetImageUrl, "asset image url");

  if (token) {
    return (
      <div className="text-center mt-14 mb-14">
        <div>
          <p className="font-bold text-2xl py-4 text-gray-700">Add new asset</p>
        </div>
        <div className="w-1/2 ml-auto mr-auto">
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Name of asset
          </label>
          <input
            required
            type="text"
            value={assetName}
            onChange={(e) => setAssetName(e.target.value)}
            placeholder="65 in. LG OLED TV"
            className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
          />
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Purchase price
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="2279.95"
            className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
          />
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Date purchased
          </label>
          <input
            type="text"
            value={datePurchased}
            onChange={(e) => setDatePurchased(e.target.value)}
            placeholder="MM-DD-YYYY"
            className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
          />
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Warranty information (optional)
          </label>
          <textarea
            cols={8}
            maxLength={300}
            value={warrantyInfo}
            onChange={(e) => setWarrantyInfo(e.target.value)}
            placeholder="Warranty information"
            className="block rounded-lg border-2 mb-8 text-xl p-4 w-full"
          />
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Additional notes about the asset
          </label>
          <textarea
            cols={8}
            maxLength={300}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Miscellaneous notes"
            className="block rounded-lg border-2 mb-1 text-xl p-4 w-full"
          />
          <p
            className={
              notes.length === 300
                ? "text-xs text-left pl-2 mb-8 text-red-500"
                : "text-xs text-left pl-2 mb-8"
            }
          >
            {300 - notes.length} of 300 chars. remaining
          </p>
          <label
            className="block mb-1 text-left pl-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetName"
          >
            Tags/Keywords
          </label>
          <input
            type="text"
            onKeyUp={(e) => handleAddTag(e)}
            placeholder="living room, master bedroom, etc."
            className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-1/8"
          />
          <div className="max-w-2xl text-left mb-8">
            {tags.map((tag) => (
              <span
                className="bg-gray-200 p-4 m-1 text-sm cursor-pointer"
                key={tag}
                onClick={() => removeTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
          <label
            className="block mb-2 text-left pl-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="assetImage"
          >
            Select picture of asset
          </label>
          <input
            className="block mb-8 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="assetImage"
            type="file"
            onChange={(e) => uploadAssetImage(e.target.files[0])}
          />
          <label
            className="block mb-2 text-left pl-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="receiptImage"
          >
            Select picture of receipt
          </label>
          <input
            className="block mb-10 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="receiptImage"
            type="file"
            onChange={(e) => setReceiptImage(e.target.files[0])}
          />

          <button
            onClick={handleSubmit}
            className={
              assetName && amount && datePurchased
                ? "block bg-green-600 p-4 rounded-lg w-full text-3xl text-white"
                : "block bg-gray-300 p-4 rounded-lg w-full text-3xl text-gray-600 cursor-not-allowed"
            }
            disabled={!amount || !assetName || !datePurchased}
          >
            Save asset
          </button>
        </div>
      </div>
    );
  }

  return <div>You must be logged in.</div>;
};

export default AddNewAsset;
