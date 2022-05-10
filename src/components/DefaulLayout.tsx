import React from "react";
import Navbar from "./Navbar";

export default function DefaulLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-[calc(100vh-64px)] mt-16">{children}</div>
    </>
  );
}
