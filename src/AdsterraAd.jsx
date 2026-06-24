import { useEffect, useRef, useState } from 'react';

export default function AdsterraAd({ type, adKey, width, height }) {
  const nativeRef = useRef(null);

  useEffect(() => {
    // Inject Native Ad script dynamically
    if (type === 'native' && !document.getElementById('adsterra-native-script')) {
      const script = document.createElement('script');
      script.id = 'adsterra-native-script';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = '//pl29879136.effectivecpmnetwork.com/8455a8683ada6701da13e3ed06fd93f9/invoke.js';
      document.body.appendChild(script);
    }
  }, [type]);

  if (type === 'native') {
    return (
      <div className="ad-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
        <div id="container-8455a8683ada6701da13e3ed06fd93f9" ref={nativeRef}></div>
      </div>
    );
  }

  // Banner Ads use iframe. Always show full height.
  return (
    <div 
      className="ad-container" 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '20px 0', 
        width: '100%', 
        overflowX: 'auto',
        height: `${height}px`,
        opacity: 1
      }}
    >
      <iframe 
        title={`Ad ${width}x${height}`}
        src={`/ad.html?key=${adKey}&width=${width}&height=${height}`}
        width={width} 
        height={height} 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 'none', width: `${width}px`, height: `${height}px` }}
      ></iframe>
    </div>
  );
}
