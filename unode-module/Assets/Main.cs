using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.UIElements;
using Unity.Properties;

[assembly: GeneratePropertyBagsForType(typeof(Camera))]
[assembly: GeneratePropertyBagsForType(typeof(Animator))]
[assembly: GeneratePropertyBagsForType(typeof(Renderer))]
[assembly: GeneratePropertyBagsForType(typeof(MeshRenderer))]
[assembly: GeneratePropertyBagsForType(typeof(MeshFilter))]
[assembly: GeneratePropertyBagsForType(typeof(Mesh))]
[assembly: GeneratePropertyBagsForType(typeof(Material))]
[assembly: GeneratePropertyBagsForType(typeof(Button))]
[assembly: GeneratePropertyBagsForType(typeof(ToggleButtonGroup))]
[assembly: GeneratePropertyBagsForType(typeof(Image))]
[assembly: GeneratePropertyBagsForType(typeof(Label))]
[assembly: GeneratePropertyBagsForType(typeof(RepeatButton))]
[assembly: GeneratePropertyBagsForType(typeof(ScrollView))]
[assembly: GeneratePropertyBagsForType(typeof(Scroller))]
[assembly: GeneratePropertyBagsForType(typeof(Slider))]
[assembly: GeneratePropertyBagsForType(typeof(GroupBox))]
[assembly: GeneratePropertyBagsForType(typeof(RadioButton))]
[assembly: GeneratePropertyBagsForType(typeof(RadioButtonGroup))]
[assembly: GeneratePropertyBagsForType(typeof(Toggle))]
[assembly: GeneratePropertyBagsForType(typeof(TextField))]
[assembly: GeneratePropertyBagsForType(typeof(Box))]
[assembly: GeneratePropertyBagsForType(typeof(PopupField<string>))]
[assembly: GeneratePropertyBagsForType(typeof(DropdownField))]
[assembly: GeneratePropertyBagsForType(typeof(HelpBox))]
[assembly: GeneratePropertyBagsForType(typeof(PopupWindow))]
[assembly: GeneratePropertyBagsForType(typeof(ProgressBar))]
[assembly: GeneratePropertyBagsForType(typeof(ListView))]
[assembly: GeneratePropertyBagsForType(typeof(TwoPaneSplitView))]
[assembly: GeneratePropertyBagsForType(typeof(TreeView))]
[assembly: GeneratePropertyBagsForType(typeof(Foldout))]
[assembly: GeneratePropertyBagsForType(typeof(MultiColumnListView))]
[assembly: GeneratePropertyBagsForType(typeof(MultiColumnTreeView))]
[assembly: GeneratePropertyBagsForType(typeof(Tab))]
[assembly: GeneratePropertyBagsForType(typeof(TabView))]

public class Main
{
  [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.AfterAssembliesLoaded)]
  public static void Init()
  {
    Node.LoadAssetAsync = (string path) => Addressables.LoadAssetAsync<object>(path).Task;
  }
}
