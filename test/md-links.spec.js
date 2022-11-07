const { mdLinks } = require('../src/index.js');
const { statsMDFiles, totalStatsValidate } = require('../src/utilities.js');
const { dataMock } = require('./mockData.js');

// Testeando función de estadisticas
describe('statsMDFiles', () => {
  test.todo('statsMDFiles retorna la estadística de los links encontrados'), () => {
    expect(statsMDFiles(dataMock.validateTrue)).toEqual(dataMock.stats);
  }
});

// testeando función de estadísticas y validación 
describe('totalStatsValidate', () => {
  test.todo('totalStatsValidate retorna la estadística de los links encontrados y rotos'), () => {
    expect(totalStatsValidate(dataMock.validateTrue)).toEqual(dataMock.statsAndValidate);
  }
});


// testeando función markdown links 
describe('mdLinks', () => {
    it('mdLinks comprobando que es una función', () => {
      expect(typeof mdLinks).toBe('function');
    });

    it('mdLinks retorna validate true', (done) => {
    mdLinks(dataMock.pathFile, { validate: true })
      .then((ans) => {
        expect(ans).toEqual(dataMock.validateTrue);
        done()
      })
    });

  it('mdLinks retorna validate false', (done) => {
    mdLinks(dataMock.pathFile, { validate: false })
      .then((ans) => {
        expect(ans).toEqual(dataMock.validateFalse);
        done()
      })
  });

  it('Cuando el archivo no es markdown (.md)', (done) => {
    mdLinks('testBadDirectory', { validate: false })
      .then((ans) => {
        expect(ans).toEqual('No es un archivo markdown.md');
        done()
      })
  });


});




