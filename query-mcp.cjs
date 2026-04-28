require('dotenv').config();

const https = require('https');

const data = JSON.stringify({
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/list'
});

const options = {
  hostname: 'stitch.googleapis.com',
  path: '/mcp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': process.env.GCP_API_KEY, // Agora ele lê do .env
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => { responseData += chunk; });
  res.on('end', () => {
    console.log("Tools:", responseData);
    
    // Now request resources
    const data2 = JSON.stringify({
      jsonrpc: '2.0',
      id: 2,
      method: 'resources/list'
    });
    const options2 = { ...options, headers: { ...options.headers, 'Content-Length': data2.length } };
    const req2 = https.request(options2, (res2) => {
      let responseData2 = '';
      res2.on('data', (chunk) => { responseData2 += chunk; });
      res2.on('end', () => {
        console.log("\nResources:", responseData2);
      });
    });
    req2.write(data2);
    req2.end();
  });
});

req.on('error', (error) => { console.error(error); });
req.write(data);
req.end();
