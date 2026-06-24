import React, { useEffect, useRef } from 'react';

export default function AdsterraAd({ adKey, width, height }) {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // Clear any existing children to prevent duplicate ads
    adRef.current.innerHTML = "";

    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.async = true;
    invokeScript.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;

    adRef.current.appendChild(optionsScript);
    adRef.current.appendChild(invokeScript);
  }, [adKey, width, height]);

  return (
    <div
      ref={adRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        margin: "20px auto",
        textAlign: "center",
        overflow: "hidden"
      }}
    />
  );
}
