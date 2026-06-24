import React from 'react';

export default function AdsterraAd({ type, adKey, width, height }) {
  let htmlContent = '';

  if (type === 'native') {
    htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
          </style>
        </head>
        <body>
          <script async="async" data-cfasync="false" src="https://pl29879136.effectivecpmnetwork.com/8455a8683ada6701da13e3ed06fd93f9/invoke.js"></script>
          <div id="container-8455a8683ada6701da13e3ed06fd93f9"></div>
        </body>
      </html>
    `;
    return (
      <div className="ad-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
        <iframe 
          title="Native Ad"
          srcDoc={htmlContent} 
          width="100%" 
          height={height || 350} 
          frameBorder="0" 
          scrolling="no" 
          style={{ border: 'none', maxWidth: '800px' }}
        ></iframe>
      </div>
    );
  }

  // Banner Ads
  htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background: transparent; overflow: hidden; }
        </style>
      </head>
      <body>
        <script>
          atOptions = {
            'key' : '${adKey}',
            'format' : 'iframe',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
      </body>
    </html>
  `;

  return (
    <div className="ad-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%', overflowX: 'auto' }}>
      <iframe 
        title={`Ad ${width}x${height}`}
        srcDoc={htmlContent} 
        width={width} 
        height={height} 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 'none', width: '${width}px', height: '${height}px' }}
      ></iframe>
    </div>
  );
}
