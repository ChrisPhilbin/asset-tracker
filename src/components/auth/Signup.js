import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNewTokenAsync } from "../../store/actions/SessionActions";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    dispatch(fetchNewTokenAsync(userData));
  };

  return (
    <div className="text-center mt-14">
      <div>
        <p className="font-bold text-2xl py-4 text-gray-700">Sign up</p>
      </div>
      <div className="w-1/4 ml-auto mr-auto">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
          className="block rounded-lg border-2 h-14 mb-4 text-xl p-4 w-full"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="block rounded-lg border-2 h-14 mb-4 text-xl p-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="block rounded-lg border-2 h-14 mb-4 text-xl p-4 w-full"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="re-enter password"
          className="block rounded-lg border-2 h-14 mb-4 text-xl p-4 w-full"
        />
        <button
          onClick={handleSubmit}
          className={
            email &&
            password &&
            confirmPassword &&
            username &&
            password === confirmPassword
              ? "block bg-red-500 p-4 rounded-lg w-full text-3xl text-white"
              : "block bg-slate-300 p-4 rounded-lg w-full text-3xl text-gray-600 cursor-not-allowed"
          }
          disabled={
            !email ||
            !password ||
            !confirmPassword ||
            !username ||
            password !== confirmPassword
          }
        >
          Log in
        </button>
        <div className="text-right pt-2">
          <p className="block text-sm text-gray-700">
            <Link to="/login">Have an account? Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
