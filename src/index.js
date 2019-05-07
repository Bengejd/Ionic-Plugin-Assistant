const log = require('clg-color');

import { configQuestions } from './util/questions';
import {readFile, getFilePaths, writeFile} from './util/fileReader';
import {createNameVariations} from './util/namer';

async function init() {
  try {

    const opts = await configQuestions();
    const names = await createNameVariations(opts);

    const filePaths = await getFilePaths();

    filePaths.map(async (fp) => {
      const templateFile = await readFile(fp.template);
      let newFile = '';

      for(let i = 0; i < await templateFile.length; i++) {
        const line = await templateFile[i];
        const newLine = await line
          .replace('PASCAL_NAME', global.PASCAL_NAME)
          .replace('PASCAL_NAME', global.PASCAL_NAME)
          .replace('CORDOVA_NAME', global.CORDOVA_NAME)
          .replace('CORDOVA_NAME', global.CORDOVA_NAME)
          .replace('AUTHOR_NAME', global.AUTHOR_NAME)
          .replace('AUTHOR_NAME', global.AUTHOR_NAME)
          .replace('PLATFORMS', global.PLATFORMS);
        newFile = newFile + newLine + '\n';
      }
      writeFile(fp.path, newFile);
    });
  } catch (err) {
    log.error(err);
  }
}

init();
