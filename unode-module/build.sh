#!/bin/bash
set -e

DTS_OUT=$(pwd)/Packages/net.ringoz.unity.nodeapi/Runtime/Unity.NodeApi.d.ts
UNITY_VERSION=$(head -n 1 ProjectSettings/ProjectVersion.txt | cut -d ' ' -f 2)

case "$OSTYPE" in
  msys*)
    GENTS=$(pwd)/../../node-api-dotnet/out/bin/Release/NodeApi.Generator/net10.0/win-x64/Microsoft.JavaScript.NodeApi.Generator
    UNITY="C:/Program Files/Unity/Hub/Editor/$UNITY_VERSION/Editor/Unity.com"
    #$UNITY -quit -batchmode -nographic -logFile - -projectPath "." -buildWindows64Player "Build.app/UnityPlayer.exe"
    #cd Build.app/UnityPlayer_BackUpThisFolder_ButDontShipItWithYourGame
    ;;
  darwin*)
    GENTS=$(pwd)/../../node-api-dotnet/out/bin/Release/NodeApi.Generator/net10.0/osx-arm64/Microsoft.JavaScript.NodeApi.Generator
    UNITY=/Applications/Unity/Hub/Editor/$UNITY_VERSION/Unity.app/Contents/MacOS/Unity
    #$UNITY -quit -batchmode -nographic -logFile - -projectPath "." -buildOSXUniversalPlayer "Build.app"
    #cd Build_BackUpThisFolder_ButDontShipItWithYourGame/Managed/
    ;;
esac

$UNITY -quit -batchmode -nographic -logFile - -projectPath "." -activeBuildProfile "Assets/Settings/Build Profiles/WebDev.asset" -build "Build.web"
cd Library/Bee/artifacts/WebGL/ManagedStripped/

NET_REFS=$(find . -name "*.dll" -type f -print0 | sed 's/.\//;/g')
$GENTS --assembly "Unity.NodeApi.dll" --reference "$NET_REFS" --typedefs "$DTS_OUT" --framework "netstandard2.1"
