import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Features/userSlice.js";

type LoginForm = {
  email: string;
  password: string;
};

function LoginPage() {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [Authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const {  isAuthorized } = useSelector((state:any) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);
      setServerError("");
dispatch(loginStart());
      const res = await axios.post(
        "http://localhost:8000/login",
        data,
        {
          withCredentials: true,
        }
      );
      dispatch(loginSuccess(res.data));
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
      setAuthorized(true)
      console.log("Login success:", res.data);
    } catch (error: any) {
      dispatch(loginFailure());
      setServerError(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-black to-indigo-900 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-sm text-white/70 mt-2">
            Sign in to continue to your account ?{" "}
            <Link to="/signup" className="underline hover:text-purple-300">
              Sign up
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-300">
                {errors.password.message}
              </p>
            )}
          </div>

          {serverError && (
            <div className="rounded-xl bg-red-500/15 border border-red-400/30 px-4 py-3 text-sm text-red-200">
              {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;