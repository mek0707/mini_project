import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF, Text} from "@react-three/drei";
import {Suspense} from "react";

// ModelViewer component
export default function ModelViewer() {
  return (
    <Canvas style={{background: "#ddd"}}>
      {/* <Canvas style={{ width: "100vw", height: "100vh", background: "#ddd" }}></Canvas> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

// Load Model
function Model() {
  const {scene} = useGLTF("/models/robot.glb"); // ใช้เส้นทางไฟล์ที่ถูกต้อง
  return <primitive object={scene} scale={1} />;
}

// Loading Component ที่แก้ไข
function Loading() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="lightgray" />
      {/* ใช้ Text จาก @react-three/drei */}
      <Text position={[0, 0, 1]} fontSize={0.5} color="black">
        Loading...
      </Text>
    </mesh>
  );
}
