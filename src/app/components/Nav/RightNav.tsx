"use client";
import { redirect } from "next/navigation";
import React from "react";

const RightNav = ({ user }: any) => {
  return (
    <div>
      {user ? (
        <div>
          <span className="navbar-text">Hello User</span>
          <button
            className="btn btn-outline-danger ms-2"
            type="button"
            onClick={() => {}}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={() => redirect("/login")}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default RightNav;
