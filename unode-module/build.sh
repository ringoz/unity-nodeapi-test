#!/bin/bash
set -e

JS_OUT=$(pwd)/Packages/net.ringoz.unity.nodeapi
UNITY_VERSION=$(head -n 1 ProjectSettings/ProjectVersion.txt | cut -d ' ' -f 2)

case "$OSTYPE" in
  msys*)
    UNITY="C:/Program Files/Unity/Hub/Editor/$UNITY_VERSION/Editor/Unity.com"
    DOTNET="C:/Program Files/Unity/Hub/Editor/$UNITY_VERSION/Editor/Data/NetCoreRuntime"
    ROSLYN="C:/Program Files/Unity/Hub/Editor/$UNITY_VERSION/Editor/Data/DotNetSdkRoslyn"
    #"$UNITY" -quit -batchmode -nographic -logFile - -projectPath "." -buildWindows64Player "Build.app/UnityPlayer.exe"
    #cd Build.app/UnityPlayer_BackUpThisFolder_ButDontShipItWithYourGame/Managed/
    ;;
  darwin*)
    UNITY=/Applications/Unity/Hub/Editor/$UNITY_VERSION/Unity.app/Contents/MacOS/Unity
    #"$UNITY" -quit -batchmode -nographic -logFile - -projectPath "." -buildOSXUniversalPlayer "Build.app"
    #cd Build_BackUpThisFolder_ButDontShipItWithYourGame/Managed/
    ;;
esac

"$UNITY" -quit -batchmode -nographic -logFile - -projectPath "." -activeBuildProfile "Assets/Settings/Build Profiles/WebDev.asset" -build "Build.web"
cd Library/Bee/artifacts/WebGL/ManagedStripped/

NET_REFS=$(find . -name "*.dll" -type f -print0 | sed 's/.\//;/g')
"$DOTNET/dotnet" exec --runtimeconfig "$ROSLYN/csc.runtimeconfig.json" \
  "$JS_OUT/Runtime/node-api-dotnet/Microsoft.JavaScript.NodeApi.Generator.dll" --assembly "Unity.NodeApi.dll" --reference "$NET_REFS" --typedefs "$JS_OUT/index.d.ts" --module "$JS_OUT/package.json" --framework "netstandard2.1"
