import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function JeuVideo () {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../../Build3/Build/Build3.loader.js",
    dataUrl: "../../../../Build3/Build/Build3.data",
    frameworkUrl: "../../../../Build3/Build/Build3.framework.js",
    codeUrl: "../../../../Build3/Build/Build3.wasm",
  });
  return (
    <div>
        <Unity style={{width:1000, height: 800}} unityProvider={unityProvider}/>
    </div>
    );
}