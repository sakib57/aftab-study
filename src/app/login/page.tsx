"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center w-100"
      style={{ height: "90vh" }}
    >
      <div className="bg-white shadow rounded-4 d-flex flex-column w-25 overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column gap-4 px-4 py-5 w-100 w-md-50"
        >
          <h2 className="fs-3 fw-semibold text-dark mb-2 text-center ">
            Sign in to StudySmart
          </h2>
          <input
            type="email"
            placeholder="Email address"
            className="form-control p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit" className="btn btn-primary py-3 rounded shadow">
            Sign In
          </button>
          <div
            className="d-flex justify-content-between align-items-center text-secondary mt-2"
            style={{ fontSize: "0.95rem" }}
          >
            <a href="#" className="text-primary text-decoration-underline">
              Forgot password?
            </a>
            <a href="#" className="text-primary text-decoration-underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
