import { Vector3 } from 'three'
import { useRef } from 'react'
import { Canvas as Canvas2, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, SpotLight, useDepthBuffer } from '@react-three/drei'
import './Lights.css'

export default function Lights() {
  return (
    <div className="canvas-fiber">
    <Canvas2 shadows dpr={[1, 2]} camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}>
      <color attach="background" args={['#1A1A2E']} />
      <fog attach="fog" args={['#1A1A2E', 5, 20]} />
      <ambientLight intensity={0.015} />
      <Scene />
    </Canvas2>
    </div>
  )
}

function Scene() {
  // This is a super cheap depth buffer that only renders once (frames: 1 is optional!), which works well for static scenes
  // Spots can optionally use that for realism, learn about soft particles here: http://john-chapman-graphics.blogspot.com/2013/01/good-enough-volumetrics-for-spotlights.html
  const depthBuffer = useDepthBuffer({ frames: 1 })
  const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/dragon/model.gltf')
  return (
    <>
      <MovingSpot depthBuffer={depthBuffer} color="#0F3460" position={[3, 3, 1]} />
      <MovingSpot depthBuffer={depthBuffer} color="#581b25" position={[1, 3, 0]} />
      <MovingSpot depthBuffer={depthBuffer} color="#0F3460" position={[-2, 3, 0]} />
      <mesh position={[0, -1.03, 0]} castShadow receiveShadow geometry={nodes.dragon.geometry} material={materials['Default OBJ.001']} dispose={null} />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  )
}

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state) => {
    light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
    light.current.target.updateMatrixWorld()
  })
  return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={7} anglePower={4} intensity={5} {...props} />
}
