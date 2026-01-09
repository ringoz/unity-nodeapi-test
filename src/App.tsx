import { asset, Capsule, Cube, GameObject, Cylinder, Sphere, Transform } from 'net.ringoz.unity.nodeapi/react';
import { Suspense } from 'react';

const CubeSpin = asset('CubeSpin');

function App() {
  return (
    <>
      <Suspense fallback={<Capsule />}>
        <CubeSpin />
      </Suspense>
      <Sphere name="sphere1">
        <Transform localScale={[2, 2, 2]} localPosition={[1, 2, 3]} />
        <GameObject>
          <Transform localScale={[0.5, 0.5, 0.5]} />
          <Cylinder>
            <Transform localPosition={[0, 1, 1]} />
          </Cylinder>
          <Cube>
            <Transform localPosition={[-1, -1, -1]} />
          </Cube>
        </GameObject>
      </Sphere>
    </>
  )
}

export default App
