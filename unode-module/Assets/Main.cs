using UnityEngine;
using UnityEngine.AddressableAssets;

public class Main
{
  [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)]
  public static void Init()
  {
    BaseObject.LoadAsync = (string path) => Addressables.LoadAssetAsync<object>(path).Task;
  }
}
