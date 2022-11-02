const dataMock = {
    pathFile: 'src/testFile.md',
    validateFalse: [
        {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/src/testFile.md',
          },
          {
            href: 'https://no.dejs.org/',
            text: 'Node.js',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/src/testFile.md',
          }
    ],
    validateTrue: [
        {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'Markdown',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/src/testFile.md',
            status: 200,
            txt: 'Ok'
          },
          {
            href: 'https://no.dejs.org/',
            text: 'Node.js',
            file: '/Users/dana/Documents/Dana 2022/Laboratoria/BOG005-md-links/src/testFile.md',
            status: 'No hay respuesta del servidor',
            txt: 'fail'
          }
    ],
    stats: { Total: 2, Unique: 2 },
    statsAndValidate: { Total: 2, Unique: 2, Broken: 1 },

}

module.exports = { dataMock };
