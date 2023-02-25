import * as React from "react";

// import { Box } from "@mui/material";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import ModelLoaderProgress from "./ModelLoaderProgress";

export default function ModelView(params) {
    const [model, setModel] = React.useState(
        `${process.env.PUBLIC_URL}\\resources\\models\\${params.modelName}`
    );

    const object = useLoader(STLLoader, model);

    return (
        <Canvas>
            <React.Suspense fallback={<ModelLoaderProgress />}>
                <color attach="background" args={[0xa0a0a0]} />
                <PerspectiveCamera
                    makeDefault
                    manual
                    position={[60, 120, 100]}
                    fov={75}
                    aspect={1.88}
                />
                <hemisphereLight args={[0xffffff, 0x444444]} />
                <directionalLight
                    args={[0xffffff]}
                    position={[0, 200, 100]}
                    castShadow={true}
                    shadow={{ top: 180, bottom: -100, left: -120, right: 120 }}
                />

                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true}>
                    <planeGeometry args={[2000, 2000]} />
                    <meshPhongMaterial color={0x999999} depthWrite={false} />
                </mesh>
                <axesHelper args={[500]} position={[0, 0.1, 0]} />
                <gridHelper args={[2000, 20, 0x999999, 0x999999]} />

                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                    <primitive object={object} attach="geometry" />
                    <meshStandardMaterial color={"green"} />
                </mesh>

                <OrbitControls />
            </React.Suspense>
        </Canvas>
    );
}
