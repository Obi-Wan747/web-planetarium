
export default function Background() {
    return (
    <mesh castShadow={false}>
        <sphereGeometry args={[100, undefined, 32, ...new Array<undefined>(3).fill(undefined), Math.PI / 2]} />
        <meshStandardMaterial side={1} />
    </mesh>
    )
}