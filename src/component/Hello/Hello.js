import React, { useEffect, useState } from "react";
import Mount from "./Mount";
import './style.css'

export const Hello = () => {
  const [show, setShow] = useState(false)





  return (
    <div className="container">
      {!show && <button
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        Mở máy tính
      </button>}
      {show && <Mount />}
    </div>
  );
};
