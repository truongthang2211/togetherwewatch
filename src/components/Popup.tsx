import { useState } from "react";

interface Popup {
  open: boolean;
  children: React.ReactNode;
}
export default function Popup({ open, children }: Popup) {
  const [openModal, setOpenModal] = useState(false);
  const handleOnClose = () => {
    console.log("eheheh");
  };
  return (
    <>
      {open && (
        <div
          onClick={handleOnClose}
          className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-40"
        >
          <div className="relative z-50 pointer-events-auto m-auto"></div>
          {children}
        </div>
      )}
    </>
  );
}
