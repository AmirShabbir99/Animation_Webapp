import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerStart, registerSuccess, registerFailure } from "../Features/userSlice.js";
import { useDispatch } from "react-redux";
type SignupForm = {
  name: string;
  email: string;
  phone: string;
  role: "SuperAdmin" | "User";
  password: string;
};

function SignupPage() {
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupForm>({
    defaultValues: {
      role: "User",
    },
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      setLoading(true);
      setServerError("");
      setServerSuccess("");
      dispatch(registerStart())

      const res = await axios.post(
        "http://localhost:8000/signup",
        data,
        {
          withCredentials: true,
        }
      );

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
      dispatch(registerSuccess(res.data))

      setServerSuccess(res.data?.message || "Account created successfully.");
      reset({
        name: "",
        email: "",
        phone: "",
        role: "User",
        password: "",
      });
    } catch (error: any) {
      dispatch(registerFailure())

      setServerError( 
        error?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-purple-800 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-sm text-white/70 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="underline hover:text-purple-300">
              Login
            </Link>
          </p>

        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
            )}
          </div>

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
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "Phone is required",
              })}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-300">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <select
              {...register("role", {
                required: "Role is required",
              })}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
            >
              <option value="User" className="text-black">
                User
              </option>
              <option value="SuperAdmin" className="text-black">
                Super Admin
              </option>
            </select>
            {errors.role && (
              <p className="mt-1 text-sm text-red-300">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
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

          {serverSuccess && (
            <div className="rounded-xl bg-green-500/15 border border-green-400/30 px-4 py-3 text-sm text-green-200">
              {serverSuccess}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold transition hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;