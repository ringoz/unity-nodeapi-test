using UnityEngine;
using UnityEngine.AddressableAssets;
using Unity.Properties;

[assembly: GeneratePropertyBagsForType(typeof(Camera))]
[assembly: GeneratePropertyBagsForType(typeof(Animator))]
[assembly: GeneratePropertyBagsForType(typeof(Renderer))]
[assembly: GeneratePropertyBagsForType(typeof(MeshRenderer))]
[assembly: GeneratePropertyBagsForType(typeof(MeshFilter))]
[assembly: GeneratePropertyBagsForType(typeof(Mesh))]
[assembly: GeneratePropertyBagsForType(typeof(Material))]

public class Main
{
  [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)]
  public static void Init()
  {
    Node.LoadAssetAsync = (string path) => Addressables.LoadAssetAsync<object>(path).Task;
  }
}
