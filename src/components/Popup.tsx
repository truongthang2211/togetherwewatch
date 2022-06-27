import { Dispatch, SetStateAction, useRef, useState } from "react";

interface Popup {
  trigger: boolean;
  children: React.ReactNode;
  setTrigger: (e) => void;
}
export default function Popup({ trigger, children, setTrigger }: Popup) {
  const ModalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (e.target === ModalRef.current) {
      setTrigger(e);
    }
  };
  return (
    <>
      {trigger && (
        <div className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-40 animate-fade">
          <div
            ref={ModalRef}
            onMouseDown={handleOutsideClick}
            className="h-[calc(100vh-64px)] flex flex-col justify-center items-center "
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
