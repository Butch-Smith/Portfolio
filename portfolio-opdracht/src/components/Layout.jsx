import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="bg-slate-800 w-screen flex justify-center h-[90vh]">
      <div className="w-[90vw] p-8">
        {children}
      </div>
    </section>
  );
};

export default Layout;