import React from 'react';

export default function AdsterraAd({ type, adKey, width, height }) {
  let htmlContent = '';

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
