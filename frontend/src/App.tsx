
import { OrbitControlsProps } from '@react-three/drei';
import { Canvas, extend, Object3DNode, useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Color, Vector3 } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Sky } from 'three/addons/objects/Sky.js';
import Background from './components/Background.tsx'
import Floor from './components/Floor.tsx';
import Star from './components/Star.tsx';


extend({ OrbitControls, Sky })
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'orbitControls': Object3DNode<OrbitControls, typeof OrbitControls>,
      'sky': Object3DNode<Sky, typeof Sky>
    }
  }
}

function Controls(props: OrbitControlsProps) {
  const ref = useRef<OrbitControls>()
  const { camera, gl } = useThree()
  useFrame(() => ref.current?.obj?.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

function App() {

  return (
    <div className="App" style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas
        scene={{
          background: new Color(0x030303)
        }}
        camera={{ position: [0, 5, 0] }}
      >
        <Controls target={[0,5.1,0]} />
        <fogExp2 attach="fog" args={["black", 0.00005]} />
        { /** the position prop here is the direction of the sun */}
        <hemisphereLight position={new Vector3().setFromSphericalCoords(1, Math.PI, Math.PI)} args={[new Color(0x000000), new Color(0x002c6e), 1]} />
        <Background/>
        <Floor/>
        <ambientLight intensity={0}/>
        <directionalLight args={[0xffffff, 0.1]}/>
        <Star  position={new Vector3().setFromSphericalCoords(1, Math.PI/12, 0)}/>
      </Canvas>
    </div>
  )
}
export default App
