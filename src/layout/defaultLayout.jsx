import React from "react";
import Footer from "./partials/footer.component";
import Header from "./partials/header.component";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <header className="Header ">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default DefaultLayout;
