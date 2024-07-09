import { Object3D } from "three";

export default function Floor(){
    return (
        <mesh rotation={[Math.PI/2,0, 0]}>
          <circleGeometry
           args={[100]}/>
          <meshStandardMaterial side={2} />
        </mesh>
    )
}