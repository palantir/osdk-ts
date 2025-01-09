import React from "react";

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
