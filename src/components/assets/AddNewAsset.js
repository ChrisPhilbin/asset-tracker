import * as React from "react";
import { useSelector } from "react-redux";

const AddNewAsset = () => {
  const token = useSelector((state) => state.session.token);

  const [amount, setAmount] = React.useState("");
  const [datePurchased, setDatePurchased] = React.useState("");
  const [assetImage, setAssetImage] = React.useState("");
  const [receiptImage, setReceiptImage] = React.useState("");
  const [assetName, setAssetName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [warrantyInfo, setWarrantyInfo] = React.useState("");

  const handleSubmit = () => {
    console.log("Submitting...");
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTags((prevTags) => [...prevTags, e.target.value]);
    }
  };

  if (token) {
    return (
      <div className="text-center mt-14 mb-14">
        <div>
          <p className="font-bold text-2xl py-4 text-gray-700">Add new asset</p>
        </div>
        <div className="w-1/2 ml-auto mr-auto">
          <form>
            <input
              type="text"
              value={assetName}
              onChange={(e) => setAssetName(e.target.value)}
              placeholder="65 in. LG OLED TV"
              className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="$2279.95"
              className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
            />
            <input
              type="text"
              value={datePurchased}
              onChange={(e) => setDatePurchased(e.target.value)}
              placeholder="MM-DD-YYYY"
              className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-full"
            />
            <textarea
              cols={8}
              maxLength={300}
              value={warrantyInfo}
              onChange={(e) => setWarrantyInfo(e.target.value)}
              placeholder="Warranty information"
              className="block rounded-lg border-2 mb-8 text-xl p-4 w-full"
            />
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
            <input
              type="text"
              onKeyUp={(e) => handleAddTag(e)}
              placeholder="living room, master bedroom, etc."
              className="block rounded-lg border-2 h-14 mb-8 text-xl p-4 w-1/8"
            />
            <div className="max-w-2xl text-left mb-8">
              {tags.map((tag) => (
                <span className="bg-gray-200 p-4 m-1 text-sm" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <label
              className="block mb-2 text-left pl-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="assetImage"
            >
              Upload picture of asset
            </label>
            <input
              className="block mb-8 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="assetImage"
              type="file"
            />
            <label
              className="block mb-2 text-left pl-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="receiptImage"
            >
              Upload picture of receipt
            </label>
            <input
              className="block mb-10 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="receiptImage"
              type="file"
            />

            <button
              onClick={handleSubmit}
              className={
                assetName && amount
                  ? "block bg-green-600 p-4 rounded-lg w-full text-3xl text-white"
                  : "block bg-gray-300 p-4 rounded-lg w-full text-3xl text-gray-600 cursor-not-allowed"
              }
              disabled={!amount || !assetName}
            >
              Save asset
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <div>You must be logged in.</div>;
};

export default AddNewAsset;
