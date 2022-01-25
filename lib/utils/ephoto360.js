const request = require("request");
const cheerio = require("cheerio");

const tema = {
  eraser: "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html",
  fabric: "https://en.ephoto360.com/fabric-text-effect-247.html"
  
}

async function pEraser(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.eraser,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function pFabric(text1) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.fabric,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text1, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}


module.exports = {
  pEraser,
  pFabric
};