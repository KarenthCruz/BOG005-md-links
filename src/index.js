const fs = require('fs');
const path = require('path');
const {pathAbsolute, getFilesMD, getInfoLinks} = require('./utilities.js');
const chalk = require('chalk');
const routeRelative = 'testDirectory';


const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absolutPath = pathAbsolute(path);
    const arrayFileMDS = getFilesMD(absolutPath);
    const obtainInfoLinks = getInfoLinks(arrayFileMDS);
    const obtainInfoLinksHTTP = getRequestHTTP(arrayFileMDS);
    if (options.validate === false) {
      resolve(obtainInfoLinks);
    } else {
      resolve(obtainInfoLinksHTTP);
    }
  })

}
mdLinks(routeRelative).then((data) => {
  console.log('soy yo!!!', data)
})


module.exports = { mdLinks };
