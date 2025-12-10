#!/bin/bash
set -e

UNITY_VERSION=$(head -n 1 ProjectSettings/ProjectVersion.txt | cut -d ' ' -f 2)
/Applications/Unity/Hub/Editor/$UNITY_VERSION/Unity.app/Contents/MacOS/Unity -quit -batchmode -nographic -logFile - -projectPath "." -buildOSXUniversalPlayer "Build.app"

DTS_OUT=$(pwd)/Packages/net.ringoz.unity.nodeapi/Runtime/Unity.NodeApi.d.ts
pushd Build_BackUpThisFolder_ButDontShipItWithYourGame/Managed/

# enumerate all .dll files in the current directory and put them to semicolon-separated list
NET_REFS=$(find . -name "*.dll" -type f -print0 | sed 's/.\//;/g')

dotnet ~/Documents/node-api-dotnet/out/bin/Release/NodeApi.Generator/net10.0/osx-arm64/Microsoft.JavaScript.NodeApi.Generator.dll \
  --assembly "Unity.NodeApi.dll" \
  --reference "$NET_REFS" \
  --typedefs "$DTS_OUT" \
  --framework "netstandard2.1"

popd
