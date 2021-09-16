const axios = require("axios");
const fs = require("fs");

function downloadHtml(paths) {
  fs.readFile(paths, "utf8", async (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    const urls = data.toString().split("\n");
    writeFiles(urls);
  });
}

async function writeFiles(urls) {
  Promise.all(
    urls.map(async (url) => {
      console.log(url);
      return await getHtml(url);
    })
  ).then((res) => {
    res.forEach((res, idx) => {
      writeHtml(urls, res, idx);
    });
  });
}

async function getHtml(url){
  try {
    html = await axios.get(url);
    return html
  } catch(e) {
    console.log(`Couldn't download ${url}`)
    return false;
  }
}

function writeHtml(urls, res,idx){
  if (res) {
    fileName = hostName(urls[idx]);
    console.log(fileName);
    fs.writeFile(`${fileName}.txt`, res.data, "utf8", (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
    console.log(`Wrote to ${fileName}.txt`);
  }
}

function hostName(url){
  noHttp = url.split("//")[1];
  host = noHttp.split("/")[0];
  return host
};

let path = process.argv[2];
downloadHtml(path);