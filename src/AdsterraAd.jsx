import React, { useEffect, useRef } from 'react';

export default function AdsterraAd({ type, width, height }) {
  const nativeRef = useRef(null);

  // Render Native Banner using direct DOM injection
  useEffect(() => {
    if (type === 'native') {
      if (!nativeRef.current) return;
      if (nativeRef.current.querySelector('script')) return; // Prevent duplicates

      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl29879136.effectivecpmnetwork.com/8455a8683ada6701da13e3ed06fd93f9/invoke.js";
      
      nativeRef.current.appendChild(script);
    }
  }, [type]);

  if (type === 'native') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px auto', width: '100%' }}>
        <div id="container-8455a8683ada6701da13e3ed06fd93f9" ref={nativeRef}></div>
      </div>
    );
  }

  // Render Standard Banners using standalone static HTML files via iframe src
  return (
    <div
      className="ad-container"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px auto",
        width: "100%",
        overflowX: "auto",
        textAlign: "center"
      }}
    >
      <iframe
        title={`Ad-${width}x${height}`}
        src={`/ad-${width}x${height}.html`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "100%",
          display: "block"
        }}
      ></iframe>
    </div>
  );
}
