"use client";
import { useState } from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState(null);
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Study Smart
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>

              {user ? (
                <div>
                  <span className="navbar-text">Hello User</span>
                  <button
                    className="btn btn-outline-danger ms-2"
                    type="button"
                    onClick={() => setUser(null)}
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
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
