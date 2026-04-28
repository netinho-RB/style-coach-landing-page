const fs = require('fs');
const https = require('https');

let rawData = fs.readFileSync('stitch_screen.json', 'utf16le');
if (rawData.charCodeAt(0) === 0xFEFF) {
  rawData = rawData.slice(1);
}
const data = JSON.parse(rawData);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  try {
    if (data.htmlCode && data.htmlCode.downloadUrl) {
      console.log('Downloading HTML code...');
      await download(data.htmlCode.downloadUrl, 'stitch_original_code.html');
      console.log('Saved to stitch_original_code.html');
    }
    
    if (data.screenshot && data.screenshot.downloadUrl) {
      console.log('Downloading screenshot...');
      await download(data.screenshot.downloadUrl, 'stitch_original_screenshot.png');
      console.log('Saved to stitch_original_screenshot.png');
    }
  } catch (e) {
    console.error('Error:', e);
  }
}

run();
