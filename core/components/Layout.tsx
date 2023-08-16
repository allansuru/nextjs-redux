// components/Layout.tsx
import React from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container m-3">{children}</div>
    </div>
  );
};

export default Layout;
