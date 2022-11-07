const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { pathAbsolute, getFilesMD, getInfoLinks, getRequestHTTP } = require('./utilities.js');
const chalk = require('chalk');


const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absolutPath = pathAbsolute(path);
    const arrayFileMDS = getFilesMD(absolutPath);
    const obtainInfoLinks = getInfoLinks(arrayFileMDS);
    if (options.validate === false) {
      if (arrayFileMDS.length === 0) {
        resolve('No es un archivo markdown.md')
      }
      resolve(obtainInfoLinks);
    } else {
      if (arrayFileMDS.length === 0) {
        resolve('No es un archivo markdown.md')
      }
      getInfoLinks(arrayFileMDS).then((ans) => {
        getRequestHTTP(ans).then(obj => resolve(obj))
      })
    }
  })

}

module.exports = { mdLinks };
