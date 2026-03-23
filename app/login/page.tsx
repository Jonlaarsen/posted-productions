"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      document.cookie = `isLoggedin=true; path=/; expires=${new Date(Date.now() + 86400 * 1000).toUTCString()}`;
      setLoginError("");
      router.push("/admin");
    } else {
      console.log(
        process.env.NEXT_PUBLIC_USERNAME,
        process.env.NEXT_PUBLIC_PASSWORD,
      );
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center text-white items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="h-[20rem] flex flex-col justify-evenly"
      >
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="text-black bg-white text-xl pl-3 h-[2rem]"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-10 text-2xl border-2"
          style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
        >
          Login
        </button>
        {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
      </form>
    </div>
  );
}
