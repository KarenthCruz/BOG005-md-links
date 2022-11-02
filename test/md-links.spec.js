const { mdLinks } = require('../src/index.js');
const { statsMDFiles, totalStatsValidate } = require('../src/utilities.js');
const { dataMock } = require('./mockData.js');

describe('statsMDFiles', ()=>{
  it('statsMDFiles retorna la estadística de los links encontrados'), () => {
    expect(statsMDFiles(dataMock.validateTrue)).toEqual(dataMock.stats);
    }
  });


// describe('mdLinks', () => {

//   it('checks option validate: false', () => {

//     return mdLinks(dataMock.pathFile, { validate: false }).then((value) => {
//       expect(value).toEqual(dataMock.validateFalse)
//     })
//   });

//   it('checks option validate: true', () => {

//     return mdLinks(dataMock.pathFile, { validate: true }).then((value) => {
//       expect(value).toEqual(dataMock.validateTrue)
//     })
//   });
// });

// describe('mdLinks when is validate true', () => {
//   it('mdLinks get a file MD and validate:true and return an array of object', () => {
//     return mdLinks(dataMock.pathFile, { validate: true })
//       .then((res) => {
//         expect(res).toEqual(dataMock.validateTrue)
//       });
//   });
// });



