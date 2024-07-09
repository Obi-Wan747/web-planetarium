import { Vector3} from 'three'

type StarProps = {
    position: Vector3
}

export default function Star(props: StarProps){
    return (
        <pointLight position={props.position.normalize().multiplyScalar(99.5)} args={[0xffffff, 0.2, 3, 2]}/>
    )
}