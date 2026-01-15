import { Suspense } from 'react';
import { asset, Button, Capsule, Cube, Cylinder, GameObject, Sphere, TextElement, Transform, VisualElement } from 'unode-module';

const CubeSpin = asset('CubeSpin');

function App() {
  return (
    <>
      <Suspense fallback={<Capsule />}>
        <CubeSpin hideFlags={['None', 'NotEditable']} />
      </Suspense>
      <Sphere name="sphere1">
        <Transform localScale={[2, 2, 2]} localPosition={[1, 2, 3]} />
        <GameObject>
          <Transform localScale={[0.5, 0.5, 0.5]} />
          <Cylinder>
            <Transform localPosition-y={1} />
          </Cylinder>
          <Cube>
            <Transform localPosition={[-1, -1, -1]} />
          </Cube>
        </GameObject>
      </Sphere>
      <VisualElement>
        <TextElement text="Hello World!" />
        <Button text="Click me" />
      </VisualElement>
    </>
  )
}

export default App
