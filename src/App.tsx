import { Activity, Suspense } from 'react';
import { asset, Button, Capsule, Cube, Cylinder, GameObject, intrinsic, Sphere, TextElement, Transform, VisualElement } from 'unode-module';

const CubeSpin = asset('CubeSpin');
const MyButton = Object.assign(intrinsic<VisualElement>('MyButton'), {
  PART_Button: intrinsic<Button>('#PART_Button')
});

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
        <Activity mode='visible'>
          <MyButton style-width-value-value={100}>
            <MyButton.PART_Button text="My Button" enabledSelf={false} style-color-value={[0, 1, 0, 1]} />
          </MyButton>
        </Activity>
      </VisualElement>
    </>
  )
}

export default App
