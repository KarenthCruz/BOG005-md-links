#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { mdLinks } = require('./index.js');
const { statsMDFiles, totalStatsValidate } = require('./utilities.js');

const argv = process.argv;
const mdPath = process.argv[2];

function cli(mdPath, argv) {
    if (mdPath && argv === undefined) {
        console.log(chalk.red('La ruta no es válida'));

    } else if (argv.includes('--stats') && argv.includes('--validate')) {
        (mdLinks(mdPath, { validate: true }).then((ans) => {
            console.log(totalStatsValidate(ans))
        })).catch(reject => {
            console.log(chalk.red('No es un argumento válido', reject));
        })
    } else if (argv.includes('--validate')) {
        (mdLinks(mdPath, { validate: true }).then((ans) => {
            console.log(ans)
        })).catch(reject => {
            console.log(chalk.green('No existe el archivo o directorio', reject));
        })
    } else if (argv.length <= 3) {
        (mdLinks(mdPath, { validate: false }).then((ans) => {
            console.log(ans)
        })).catch(reject => {
            console.log(chalk.magenta('No es un argumento válido', reject));
        })
    } else if (argv.includes('--stats')) {
        (mdLinks(mdPath, { validate: true }).then((ans) => {
            console.log(statsMDFiles(ans))
        })).catch(reject => {
            console.log(chalk.blue('No existe el archivo o directorio', reject));
        })
    }
    else if (argv !== '--stats' && argv !== '--validate' && argv !== undefined) {
        console.log('La opción escrita no es válida, intenta con --validate, --stats')
    }

}

cli(mdPath, argv)

