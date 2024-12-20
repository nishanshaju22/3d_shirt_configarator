import { Center, Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Shirt from './Shirt'
import Backdrop from './Backdrop'
import CamaraRig from './CamaraRig'


const CanvasModel = () => {
  return (
    <Canvas
        shadows
        camera={{position: [0, 0, 0], fov: 25}}
        gl={{ preserveDrawingBuffer: true }}
        className='w-full max-w-full h-full transition-all ease-in'
    >
        <ambientLight intensity={0.5} />
        <Environment preset='city' />

        <CamaraRig>
            <Backdrop />
            <Center>
                <Shirt />
            </Center>
        </CamaraRig>
    </Canvas>
  )
}

export default CanvasModel