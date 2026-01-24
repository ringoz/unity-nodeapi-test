import { Activity, Suspense } from 'react';
import { asset, Button, Capsule, Cube, Cylinder, GameObject, intrinsic, Sphere, TextElement, Transform, VisualElement } from 'unode-module';

const CubeSpin = asset('CubeSpin');
const MyButton = Object.assign(intrinsic<VisualElement>('MyButton'), {
  PART_Button: intrinsic<Button>('#PART_Button')
});

function App() {
  return (
    <>
      <Activity mode='visible'>
        <Suspense fallback={<Capsule />}>
          <CubeSpin hideFlags={['None', 'NotEditable']}
            onAwake={() => console.log('onAwake')}
            onStart={() => console.log('onStart')}
            onEnable={() => console.log('onEnable')}
            onDisable={() => console.log('onDisable')}
            onDestroy={() => console.log('onDestroy')}
            onMouseDown={() => console.log('onMouseDown')} />
        </Suspense>
      </Activity>
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
        <TextElement text="<color='yellow'>Hello World</color>!" />
        <Button>Click me</Button>
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
