import React from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>
        Your layout here!
      </div>
      {children}
    </>
  );
}

export default Layout;
