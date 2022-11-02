const dataForMock = {
    pathFile: 'testDirectory',
    stats: { Total: 2, Unique: 2 },
    statsAndValidate: { Total: 4, Unique: 4, Broken: 0 },
    validateFalse: [
        {
            href: 'https://nodejs.org/es/',
            text: 'Node.js',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
          },
          {
            href: 'https://developers.google.com/v8/',
            text: 'motor de JavaScript V8 de Chrome',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
          },
          {
            href: 'https://developers.guugle.com/v8/',
            text: 'motor de JavaScript V8 de Chrome',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
          }
    ],
    validateTrue: [
        {
            href: 'https://nodejs.org/es/',
            text: 'Node.js',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
            status: 200,
            txt: 'Ok'
          },
          {
            href: 'https://developers.google.com/v8/',
            text: 'motor de JavaScript V8 de Chrome',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
            status: 200,
            txt: 'Ok'
          },
          {
            href: 'https://developers.guugle.com/v8/',
            text: 'motor de JavaScript V8 de Chrome',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/testDirectory/README.md',
            status: 'No hay respuesta del servidor',
            txt: 'Fail'
          }
    ],
}

module.exports = { dataForMock };
