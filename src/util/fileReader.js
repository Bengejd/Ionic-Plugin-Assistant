const lineReader = require('line-reader');
const mkdirp = require('mkdirp');
const fs = require('fs');
const log = require('clg-color');
const path = require('path');

/**
 * Reads a files contents.
 * @param {string} filePath - The filePath of the file we are reading.
 * @returns Promise<[]>;
 */
export function readFile(filePath) {
  const parsedFile = [];
  return new Promise(async (resolve) => {

    lineReader.eachLine(filePath, (line, last) => {
      parsedFile.push(line);
      if (last) return false;
    }, (err) => {
      /* istanbul ignore next */
      if (err) { // Shouldn't ever get here, but just in case.
        log.error('Ionic Plugin Asssitant encountered an error reading file: ', filePath, err);
        resolve(null);
      } else {
        resolve(parsedFile);
      }
    });
  }).catch(/* istanbul ignore next */ (err) => {});
}


/* istanbul ignore next */
export function writeFile(filePath, newFile) {
  fs.promises.mkdir(path.dirname(filePath), {recursive: true}).then(() => {
    return fs.appendFileSync(filePath, newFile);
  });
}

export async function getFilePaths() {
  let filePaths = [
    {
      'name': 'readme',
      'path': `./${global.PASCAL_NAME}/README.md`,
      'template': 'templates/README.md',
    },
    {
      'name': 'xml',
      'path': `./${global.PASCAL_NAME}/plugin.xml`,
      'template': 'templates/plugin.xml',
    },
    {
      'name': 'package',
      'path': `./${global.PASCAL_NAME}/package.json`,
      'template': 'templates/package.json',
    },
    {
      'name': 'license',
      'path': `./${global.PASCAL_NAME}/LICENSE`,
      'template': 'templates/LICENSE',
    },
    {
      'name': 'changelog',
      'path': `./${global.PASCAL_NAME}/CHANGELOG.md`,
      'template': 'templates/CHANGELOG.md',
    },
    {
      'name': 'gitignore',
      'path': `./${global.PASCAL_NAME}/.gitignore`,
      'template': 'templates/.gitignore',
    },
    {
      'name': 'xml',
      'path': `./${global.PASCAL_NAME}/.gitattributes`,
      'template': 'templates/.gitattributes',
    },
    {
      'name': 'www',
      'path': `./${global.PASCAL_NAME}/www/${global.PASCAL_NAME}.js`,
      'template': 'templates/www/template.js',
    },
    {
      'name': 'typescript',
      'path': `./${global.PASCAL_NAME}/typescript/${global.PASCAL_NAME}.d.ts`,
      'template': 'templates/typescript/template.d.ts',
    },
    {
      'name': 'native',
      'path': `./${global.PASCAL_NAME}/@ionic-native/${global.PASCAL_NAME}/index.ts`,
      'template': 'templates/@ionic-native/template/index.ts',
    },
  ];
  const android = {
    'name': 'android',
    'path': `./${global.PASCAL_NAME}/src/android/${global.PASCAL_NAME}.java`,
    'template': 'templates/src/android/template.java',
  };
  const ios = {
    'name': 'ios',
    'path': `./${global.PASCAL_NAME}/src/ios/${global.PASCAL_NAME}.swift`,
    'template': 'templates/src/ios/template.swift',
  };

  if (global.PLATFORMS.indexOf('Android') > -1) filePaths.push(android);
  if (global.PLATFORMS.indexOf('iOS') > -1) filePaths.push(ios);
  return filePaths;
}
