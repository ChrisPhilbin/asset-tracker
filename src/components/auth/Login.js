import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchNewTokenAsync } from "../../store/actions/SessionActions";

const Login = () => {
  const token = useSelector((state) => state.session.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (token) {
      navigate("/assets", { replace: true });
    }
  }, [token, navigate]);

  const handleSubmit = () => {
    const userData = {
      email: email,
      password: password,
    };
    dispatch(fetchNewTokenAsync(userData));
  };

  return (
    <div className="text-center mt-14">
      <div>
        <p className="font-bold text-2xl py-4 text-gray-700">
          Log in or Sign up
        </p>
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="block rounded-lg border-2 h-14 mb-4 text-xl p-4 w-full"
        />
        <button
          onClick={handleSubmit}
          className={
            email && password
              ? "block bg-red-500 p-4 rounded-lg w-full text-3xl text-white"
              : "block bg-slate-300 p-4 rounded-lg w-full text-3xl text-gray-600 cursor-not-allowed"
          }
          disabled={!email || !password}
        >
          Log in
        </button>
        <div className="text-right pt-2">
          <p className="block text-sm text-gray-700">
            <Link to="/signup">Don't have an account? Sign up</Link>
          </p>
          <p className="block text-sm text-gray-700">Forgot your password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
