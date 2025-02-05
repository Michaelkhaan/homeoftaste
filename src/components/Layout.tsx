import React, { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="">
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
