#!/bin/bash
set -e

JS_OUT=$(pwd)/Packages/unity-nodeapi
UNITY_VER=$(head -n 1 ProjectSettings/ProjectVersion.txt | cut -d ' ' -f 2)

case "$OSTYPE" in
  msys*)
    UNITY_EXE="C:/Program Files/Unity/Hub/Editor/$UNITY_VER/Editor/Unity.com"
    UNITY_NET="C:/Program Files/Unity/Hub/Editor/$UNITY_VER/Editor/Data"
    #"$UNITY_EXE" -quit -batchmode -nographics -logFile - -projectPath "." -buildWindows64Player "Build.app/UnityPlayer.exe"
    #cd Build.app/UnityPlayer_BackUpThisFolder_ButDontShipItWithYourGame/Managed/
    ;;
  darwin*)
    UNITY_EXE=/Applications/Unity/Hub/Editor/$UNITY_VER/Unity.app/Contents/MacOS/Unity
    UNITY_NET=/Applications/Unity/Hub/Editor/$UNITY_VER/Unity.app/Contents/Resources/Scripting
    #"$UNITY_EXE" -quit -batchmode -nographics -logFile - -projectPath "." -buildOSXUniversalPlayer "Build.app"
    #cd Build_BackUpThisFolder_ButDontShipItWithYourGame/Managed/
    ;;
esac

"$UNITY_EXE" -quit -batchmode -nographics -logFile - -projectPath "." -activeBuildProfile "Assets/Settings/Build Profiles/WebDebug.asset" -build "Build.web"
cd Library/Bee/artifacts/WebGL/ManagedStripped/

NET_REFS=$(find . -name "*.dll" -type f -print0 | sed 's/.\//;/g')
"$UNITY_NET/NetCoreRuntime/dotnet" exec --runtimeconfig "$UNITY_NET/DotNetSdkRoslyn/csc.runtimeconfig.json" \
  "$JS_OUT/Runtime/node-api-dotnet/Microsoft.JavaScript.NodeApi.Generator.dll" --assembly "Unity.NodeApi.dll" --reference "$NET_REFS" --typedefs "$JS_OUT/index.d.ts" --module "$JS_OUT/package.json" --framework "netstandard2.1"
