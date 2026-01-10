import type { Component, Vector3 } from './Packages/net.ringoz.unity.nodeapi/react';
import { intrinsic } from './Packages/net.ringoz.unity.nodeapi/react';

export * from './Packages/net.ringoz.unity.nodeapi';
export * from './Packages/net.ringoz.unity.nodeapi/react';

//#region generated

export interface Transform extends Component {
  localScale: Vector3;
  localPosition: Vector3;
}
export const Transform = intrinsic<Transform>("Transform");

//#endregion generated
