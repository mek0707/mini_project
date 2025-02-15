import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import "tailwindcss/tailwind.css";

function Modal3D() {
  const ModelViewer = dynamic(() => import("../components/ModelViewer"), {ssr: false});
  return (
    <div className="w-full h-full">
      <ModelViewer
        src="/models/robot.glb"
        alt="3D Model"
        camera-controls
        style={{width: "100%", height: "100%"}} // กำหนดขนาดในตัว
      />
    </div>
  );
}

export default Modal3D;
