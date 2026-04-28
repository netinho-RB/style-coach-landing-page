const fs = require('fs');
const https = require('https');

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
  const htmlUrl = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2RjZGM2ZWVjNjkxZTRkZDY5MjJjNTdlZjQ5N2MxMTdmEgsSBxDB5ubZ0BQYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDQyNTU1ODcyNTM5OTkyMjg3NQ&filename=&opi=89354086";
  const imgUrl = "https://lh3.googleusercontent.com/aida/ADBb0uhxT08t9fK_xySnruE-C1S10QO7DGf1pj1dIi61Xsjb-s1unpmIcqienrHMleOD3JIkGgw61hdZCW9zRCSUxVCMUstV1MJmThoF3NhE2tNR1_5P94xG9mEhlWsh-dhqe7KTiIwYFcS9oN_SapZChBIBeTMCDAAuz1aDC-qnzkU4hz0-xp5UrHy1dGIrh-5Nx5JTP8jwvMgLwCQEd9qAF8ZjlM4YEtxUKnxVHUZ6fvkAtWBcJ79dZNtAXvvw";
  
  await download(htmlUrl, 'education_code.html');
  await download(imgUrl, 'education_screenshot.png');
  console.log("Downloaded successfully.");
}

run();
