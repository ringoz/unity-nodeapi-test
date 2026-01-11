import type { Boolean, Bounds, Color, Component, GameObject, Int16, Int32, Matrix4x4, ObjectBase, Ptr, Quaternion, Rect, Single, Transform, UInt16, UInt32, UInt64, Vector2, Vector3, Vector4 } from './Packages/net.ringoz.unity.nodeapi/react';
import { intrinsic } from './Packages/net.ringoz.unity.nodeapi/react';

export * from './Packages/net.ringoz.unity.nodeapi';
export * from './Packages/net.ringoz.unity.nodeapi/react';

//#region generated

export interface Behaviour extends Component {
  enabled: Boolean;
  readonly isActiveAndEnabled: Boolean;
}
export const Behaviour = intrinsic<Behaviour>("Behaviour");

export type RenderingPath = 'VertexLit' | 'Forward' | 'DeferredLighting' | 'DeferredShading' | 'UsePlayerSettings';
export type OpaqueSortMode = 'Default' | 'FrontToBack' | 'NoDistanceSort';
export type TransparencySortMode = 'Default' | 'Perspective' | 'Orthographic' | 'CustomAxis';
export type CameraType = 'Game' | 'SceneView' | 'Preview' | 'VR' | 'Reflection';
export type CameraClearFlags = 'Skybox' | 'Color' | 'SolidColor' | 'Depth' | 'Nothing';
export type DepthTextureMode = 'None' | 'Depth' | 'DepthNormals' | 'MotionVectors';
export type GateFitMode = 'None' | 'Vertical' | 'Horizontal' | 'Fill' | 'Overscan';
export type StereoTargetEyeMask = 'None' | 'Left' | 'Right' | 'Both';
export type MonoOrStereoscopicEye = 'Left' | 'Right' | 'Mono';
export type SceneViewFilterMode = 'Off' | 'ShowFiltered';
export interface Camera extends Behaviour {
  nearClipPlane: Single;
  farClipPlane: Single;
  fieldOfView: Single;
  renderingPath: RenderingPath;
  readonly actualRenderingPath: RenderingPath;
  allowHDR: Boolean;
  allowMSAA: Boolean;
  allowDynamicResolution: Boolean;
  forceIntoRenderTexture: Boolean;
  orthographicSize: Single;
  orthographic: Boolean;
  opaqueSortMode: OpaqueSortMode;
  transparencySortMode: TransparencySortMode;
  transparencySortAxis: Vector3;
  depth: Single;
  aspect: Single;
  readonly velocity: Vector3;
  cullingMask: Int32;
  eventMask: Int32;
  layerCullSpherical: Boolean;
  cameraType: CameraType;
  overrideSceneCullingMask: UInt64;
  layerCullDistances: Single[];
  useOcclusionCulling: Boolean;
  cullingMatrix: Matrix4x4;
  backgroundColor: Color;
  clearFlags: CameraClearFlags;
  depthTextureMode: DepthTextureMode;
  clearStencilAfterLightingPass: Boolean;
  usePhysicalProperties: Boolean;
  iso: Int32;
  shutterSpeed: Single;
  aperture: Single;
  focusDistance: Single;
  focalLength: Single;
  bladeCount: Int32;
  curvature: Vector2;
  barrelClipping: Single;
  anamorphism: Single;
  sensorSize: Vector2;
  lensShift: Vector2;
  gateFit: GateFitMode;
  rect: Rect;
  pixelRect: Rect;
  readonly pixelWidth: Int32;
  readonly pixelHeight: Int32;
  readonly scaledPixelWidth: Int32;
  readonly scaledPixelHeight: Int32;
//targetTexture: RenderTexture;
//readonly activeTexture: RenderTexture;
  targetDisplay: Int32;
  readonly cameraToWorldMatrix: Matrix4x4;
  worldToCameraMatrix: Matrix4x4;
  projectionMatrix: Matrix4x4;
  nonJitteredProjectionMatrix: Matrix4x4;
  useJitteredProjectionMatrixForTransparentRendering: Boolean;
  readonly previousViewProjectionMatrix: Matrix4x4;
//scene: Scene;
  readonly stereoEnabled: Boolean;
  stereoSeparation: Single;
  stereoConvergence: Single;
  readonly areVRStereoViewMatricesWithinSingleCullTolerance: Boolean;
  stereoTargetEye: StereoTargetEyeMask;
  readonly stereoActiveEye: MonoOrStereoscopicEye;
  readonly sceneViewFilterMode: SceneViewFilterMode;
  renderCloudsInSceneView: Boolean;
  readonly isProcessingRenderRequest: Boolean;
  readonly commandBufferCount: Int32;
}
export const Camera = intrinsic<Camera>("Camera");

export type AnimatorUpdateMode = 'Normal' | 'Fixed' | 'AnimatePhysics' | 'UnscaledTime';
export type AnimatorCullingMode = 'AlwaysAnimate' | 'CullUpdateTransforms' | 'BasedOnRenderers' | 'CullCompletely';
export type AnimatorRecorderMode = 'Offline' | 'Playback' | 'Record';
export interface Animator extends Behaviour {
  readonly isOptimizable: Boolean;
  readonly isHuman: Boolean;
  readonly hasRootMotion: Boolean;
  readonly humanScale: Single;
  readonly isInitialized: Boolean;
  readonly deltaPosition: Vector3;
  readonly deltaRotation: Quaternion;
  readonly velocity: Vector3;
  readonly angularVelocity: Vector3;
  rootPosition: Vector3;
  rootRotation: Quaternion;
  applyRootMotion: Boolean;
  animatePhysics: Boolean;
  updateMode: AnimatorUpdateMode;
  readonly hasTransformHierarchy: Boolean;
  readonly gravityWeight: Single;
  bodyPosition: Vector3;
  bodyRotation: Quaternion;
  stabilizeFeet: Boolean;
  readonly layerCount: Int32;
//readonly parameters: AnimatorControllerParameter[];
  readonly parameterCount: Int32;
  feetPivotActive: Single;
  readonly pivotWeight: Single;
  readonly pivotPosition: Vector3;
  readonly isMatchingTarget: Boolean;
  speed: Single;
  readonly targetPosition: Vector3;
  readonly targetRotation: Quaternion;
  readonly avatarRoot: Ptr<Transform>;
  cullingMode: AnimatorCullingMode;
  playbackTime: Single;
  recorderStartTime: Single;
  recorderStopTime: Single;
  readonly recorderMode: AnimatorRecorderMode;
//runtimeAnimatorController: RuntimeAnimatorController;
  readonly hasBoundPlayables: Boolean;
//avatar: Avatar;
//readonly playableGraph: PlayableGraph;
  layersAffectMassCenter: Boolean;
  readonly leftFeetBottomHeight: Single;
  readonly rightFeetBottomHeight: Single;
  logWarnings: Boolean;
  fireEvents: Boolean;
  keepAnimatorStateOnDisable: Boolean;
  writeDefaultValuesOnDisable: Boolean;
}
export const Animator = intrinsic<Animator>("Animator");

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
  triangles: Int32[];
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
  shaderKeywords: String[];
  parent: Ptr<Material>;
  readonly isVariant: Boolean;
}
export const Material = intrinsic<Material>("Material");

//#endregion generated
