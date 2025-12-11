#!/bin/bash
set -e

UNITY_VERSION=$(head -n 1 ProjectSettings/ProjectVersion.txt | cut -d ' ' -f 2)
case "$OSTYPE" in
  msys*)
    RID=win-x64
    "C:/Program Files/Unity/Hub/Editor/$UNITY_VERSION/Editor/Unity.com" -quit -batchmode -nographic -logFile - -projectPath "." -buildWindows64Player "Build.app/unode-module.exe"
    ;;
  darwin*)
    RID=osx-arm64
    /Applications/Unity/Hub/Editor/$UNITY_VERSION/Unity.app/Contents/MacOS/Unity -quit -batchmode -nographic -logFile - -projectPath "." -buildOSXUniversalPlayer "Build.app"
    ;;
esac

DTS_OUT=$(pwd)/Packages/net.ringoz.unity.nodeapi/Runtime/Unity.NodeApi.d.ts
cd Build_BackUpThisFolder_ButDontShipItWithYourGame/Managed/

NET_REFS=$(find . -name "*.dll" -type f -print0 | sed 's/.\//;/g')
echo $NET_REFS
../../../../../node-api-dotnet/out/bin/Release/NodeApi.Generator/net10.0/$RID/Microsoft.JavaScript.NodeApi.Generator --assembly "Unity.NodeApi.dll" --reference "$NET_REFS" --typedefs "$DTS_OUT" --framework "netstandard2.1"
