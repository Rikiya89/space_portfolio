"use strict";

import React, {useState, useRef, Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {Points, PointMaterial, Preload} from '@react-three/drei'
// @ts-ignore
import * as random from 'math/random/dist/math-random.esm'

const StarBackground = (props: any) => {
    const  ref: any = useRef();
    const [sphere] = useState(() => {
        random.inSphere(new Float32Array(5000), { radius: 1.2})
    });
    useFrame((state, delata) => {
        ref.current.rotation.x -= delta/10;
    });
return (
    <div>StarBackground</div>
)
}
export default StarBackground