const fs = require('fs');
const https = require('https');
const path = require('path');

let rawData = fs.readFileSync('stitch_screen.json', 'utf16le');
if (rawData.charCodeAt(0) === 0xFEFF) {
  rawData = rawData.slice(1);
}
const data = JSON.parse(rawData);

// The code might be at data.code or data.content or inside a component
let code = '';
if (data.code) {
  code = data.code;
} else if (data.components && data.components.length > 0) {
  // Try to find the code inside components if any
  code = JSON.stringify(data.components, null, 2);
} else {
  // Dump the whole object to inspect if we can't find it
  code = JSON.stringify(data, null, 2);
}

// Write the raw extracted data or code
fs.writeFileSync('stitch_code_raw.json', code);

// To find image URLs (heuristic)
const urls = new Set();
const regex = /https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_-]+/g;
const matches = JSON.stringify(data).match(regex);
if (matches) {
  matches.forEach(m => urls.add(m));
}

console.log("Found " + urls.size + " image URLs");

let count = 0;
urls.forEach(url => {
  count++;
  const filename = `stitch_image_${count}.png`;
  const file = fs.createWriteStream(filename);
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', function(err) {
    fs.unlink(filename);
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});
