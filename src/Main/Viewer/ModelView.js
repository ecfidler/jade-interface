import * as React from "react";

// import * as stl from "stl";

// import { Box } from "@mui/material";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import ModelLoaderProgress from "./ModelLoaderProgress";

export default function ModelView({ modelURL }) {
    // const [object, setObject] = React.useState(undefined);

    // React.useEffect(() => {
    //     if (!model) {
    //         return;
    //     }
    //     // const stlObject = stl.toObject(model);
    //     const loader = new STLLoader();
    //     const dt = loader.parse(model);
    //     setObject(dt);
    // }, [model]);

    // React.useEffect(() => {
    //     if (!model) {
    //         return;
    //     }
    //     const loader = new STLLoader();
    //     setObject(loader.load(model));
    // }, [model, setObject]);

    // const object = useLoader(STLLoader, model);

    const object = useLoader(STLLoader, modelURL);

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
