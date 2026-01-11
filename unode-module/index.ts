import type { Boolean, Bounds, Color, Component, GameObject, Int16, Int32, Matrix4x4, ObjectBase, Ptr, Single, Transform, UInt16, UInt32, Vector2, Vector4 } from './Packages/net.ringoz.unity.nodeapi/react';
import { intrinsic } from './Packages/net.ringoz.unity.nodeapi/react';

export * from './Packages/net.ringoz.unity.nodeapi';
export * from './Packages/net.ringoz.unity.nodeapi/react';

//#region generated

export interface Behaviour extends Component {
  enabled: Boolean;
  readonly isActiveAndEnabled: Boolean;
}
export const Behaviour = intrinsic<Behaviour>("Behaviour");

export type ShadowCastingMode = 'Off' | 'On' | 'TwoSided' | 'ShadowsOnly';
export type MotionVectorGenerationMode = 'Camera' | 'Object' | 'ForceNoMotion';
export type LightProbeUsage = 'Off' | 'BlendProbes' | 'UseProxyVolume' | 'CustomProvided';
export type ReflectionProbeUsage = 'Off' | 'BlendProbes' | 'BlendProbesAndSkybox' | 'Simple';
export type RayTracingMode = 'Off' | 'Static' | 'DynamicTransform' | 'DynamicGeometry' | 'DynamicGeometryManualUpdate';
export type RayTracingAccelerationStructureBuildFlags = 'None' | 'PreferFastTrace' | 'PreferFastBuild' | 'MinimizeMemory';
export interface Renderer extends Component {
  bounds: Bounds;
  localBounds: Bounds;
  enabled: Boolean;
  readonly isVisible: Boolean;
  shadowCastingMode: ShadowCastingMode;
  receiveShadows: Boolean;
  forceRenderingOff: Boolean;
  staticShadowCaster: Boolean;
  motionVectorGenerationMode: MotionVectorGenerationMode;
  lightProbeUsage: LightProbeUsage;
  reflectionProbeUsage: ReflectionProbeUsage;
  renderingLayerMask: UInt32;
  rendererPriority: Int32;
  rayTracingMode: RayTracingMode;
  rayTracingAccelerationStructureBuildFlags: RayTracingAccelerationStructureBuildFlags[];
  rayTracingAccelerationStructureBuildFlagsOverride: Boolean;
  sortingLayerName: String;
  sortingLayerID: Int32;
  sortingOrder: Int32;
  readonly isLOD0: Boolean;
  allowOcclusionWhenDynamic: Boolean;
  forceMeshLod: Int16;
  meshLodSelectionBias: Single;
  readonly isPartOfStaticBatch: Boolean;
  readonly worldToLocalMatrix: Matrix4x4;
  readonly localToWorldMatrix: Matrix4x4;
  lightProbeProxyVolumeOverride: Ptr<GameObject>;
  probeAnchor: Ptr<Transform>;
  lightmapIndex: Int32;
  realtimeLightmapIndex: Int32;
  lightmapScaleOffset: Vector4;
  realtimeLightmapScaleOffset: Vector4;
//materials: Material[];
  material: Ptr<Material>;
  sharedMaterial: Ptr<Material>;
//sharedMaterials: Material[];
//readonly LODGroup: LODGroup;
}
export const Renderer = intrinsic<Renderer>("Renderer");

export type ReceiveGI = 'Lightmaps' | 'LightProbes';
export interface MeshRenderer extends Renderer {
  additionalVertexStreams: Ptr<Mesh>;
  enlightenVertexStream: Ptr<Mesh>;
  readonly subMeshStartIndex: Int32;
  scaleInLightmap: Single;
  receiveGI: ReceiveGI;
  stitchLightmapSeams: Boolean;
  globalIlluminationMeshLod: UInt16;
}
export const MeshRenderer = intrinsic<MeshRenderer>("MeshRenderer");

export interface MeshFilter extends Component {
  sharedMesh: Ptr<Mesh>;
  mesh: Ptr<Mesh>;
}
export const MeshFilter = intrinsic<MeshFilter>("MeshFilter");

export type IndexFormat = 'UInt16' | 'UInt32';
export type Target = 'Vertex' | 'Index' | 'CopySource' | 'CopyDestination' | 'Structured' | 'Raw' | 'Append' | 'Counter' | 'IndirectArguments' | 'Constant';
export type SkinWeights = 'None' | 'OneBone' | 'TwoBones' | 'FourBones' | 'Unlimited';
export interface Mesh extends ObjectBase {
  indexFormat: IndexFormat;
  readonly vertexBufferCount: Int32;
  vertexBufferTarget: Target;
  indexBufferTarget: Target;
  readonly blendShapeCount: Int32;
  readonly bindposeCount: Int32;
//bindposes: Matrix4x4[];
  readonly isReadable: Boolean;
  readonly vertexCount: Int32;
  subMeshCount: Int32;
  bounds: Bounds;
//vertices: Vector3[];
//normals: Vector3[];
//tangents: Vector4[];
//uv: Vector2[];
//uv2: Vector2[];
//uv3: Vector2[];
//uv4: Vector2[];
//uv5: Vector2[];
//uv6: Vector2[];
//uv7: Vector2[];
//uv8: Vector2[];
//colors: Color[];
//colors32: Color32[];
  lodCount: Int32;
//lodSelectionCurve: LodSelectionCurve;
  readonly vertexAttributeCount: Int32;
//triangles: Int32[];
//boneWeights: BoneWeight[];
  readonly skinWeightBufferLayout: SkinWeights;
}
export const Mesh = intrinsic<Mesh>("Mesh");

export type MaterialGlobalIlluminationFlags = 'None' | 'RealtimeEmissive' | 'BakedEmissive' | 'AnyEmissive' | 'EmissiveIsBlack';
export interface Material extends ObjectBase {
//shader: Shader;
  color: Color;
//mainTexture: Texture;
  mainTextureOffset: Vector2;
  mainTextureScale: Vector2;
  renderQueue: Int32;
  readonly rawRenderQueue: Int32;
//enabledKeywords: LocalKeyword[];
  globalIlluminationFlags: MaterialGlobalIlluminationFlags[];
  doubleSidedGI: Boolean;
  enableInstancing: Boolean;
  readonly passCount: Int32;
//shaderKeywords: String[];
  parent: Ptr<Material>;
  readonly isVariant: Boolean;
}
export const Material = intrinsic<Material>("Material");

//#endregion generated
