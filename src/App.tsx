// @ts-nocheck
import { Suspense, useState } from 'react'
import { prefab } from 'net.ringoz.unity.nodeapi/react'

const CubeSpin = prefab('cubeSpin');

function App() {
  return (
    <>
      <Suspense fallback={<capsule />}>
        <CubeSpin />
      </Suspense>
      <sphere name="sphere1">
        <transform localScale="2 2 2" localPosition="1 2 3" />
        <object>
          <transform localScale="0.5 0.5 0.5" />
          <cylinder>
            <transform localPosition="0 1 1" />
          </cylinder>
          <cube>
            <transform localPosition="-1 -1 -1" />
          </cube>
        </object>
      </sphere>
    </>
  )
}

export default App
