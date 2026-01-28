import { Activity, Suspense, useRef, useState } from 'react';
import { asset, Button, Capsule, Cube, Cylinder, GameObject, intrinsic, Node, RadioButtonGroup, Sphere, TextElement, Transform, VisualElement } from 'unode-module';

const CubeSpin = asset('CubeSpin');
const MyButton = Object.assign(intrinsic<VisualElement>('MyButton'), {
  PART_Button: intrinsic<Button>('#PART_Button')
});

function App() {
  const [enabled, setEnabled] = useState(false);
  const cubeRef = useRef<GameObject>(null);

  function handleCubeClick() {
    (cubeRef.current as unknown as Node).invoke("Message", "Hello World!");
  }

  return (
    <>
      <Activity mode='visible'>
        <Suspense fallback={<Capsule />}>
          <CubeSpin ref={cubeRef} hideFlags={['None', 'NotEditable']}
            onAwake={() => console.log('onAwake')}
            onStart={() => console.log('onStart')}
            onEnable={() => console.log('onEnable')}
            onDisable={() => console.log('onDisable')}
            onDestroy={() => console.log('onDestroy')}
            onMessage={(e) => console.log('onMessage', e.value)}
            onMouseDown={handleCubeClick} />
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
      <VisualElement style-flexGrow-value={1}>
        <TextElement text="<color='yellow'>Hello World</color>!" onPointerMove={(e) => console.log(e.toString(), e.localPosition)} />
        <Button onClick={() => setEnabled(!enabled)}>Click me</Button>
        <RadioButtonGroup name="radioButtonGroup1" choices={["aa", "bb"]} onChangeInt32={(e) => console.log(e.newInt32)}>
        </RadioButtonGroup>
        <Activity mode='visible'>
          <MyButton style-width-value-value={100} onGeometryChanged={(e) => console.log(e.toString(), e.newRect)}>
            <MyButton.PART_Button text="My Button" enabledSelf={enabled} style-color-value={[0, 1, 0, 1]} />
          </MyButton>
        </Activity>
      </VisualElement>
    </>
  )
}

export default App
