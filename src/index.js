const log = require('clg-color');
const path = require('path');

import { configQuestions } from './util/questions';
import {readFile, getFilePaths, writeFile} from './util/fileReader';
import {createNameVariations} from './util/namer';

async function init() {

  console.log('starting in: ', __dirname);

  try {

    const opts = await configQuestions();
    const names = await createNameVariations(opts);

    const filePaths = await getFilePaths();

    filePaths.map(async (fp) => {
      const templateFile = await readFile(fp.template);
      let newFile = '';

      for(let i = 0; i < templateFile.length; i++) {
        const line = await templateFile[i];
        const newLine = await line
          .replace(/PASCAL_NAME/g, global.PASCAL_NAME)
          .replace(/CORDOVA_NAME/g, global.CORDOVA_NAME)
          .replace(/AUTHOR_NAME/g, global.AUTHOR_NAME)
          .replace(/DESCRIPTION/g, global.PLUGIN_DESCRIPTION)
          .replace(/PLATFORMS/g, global.PLATFORMS);
        newFile = newFile + newLine + '\n';
      }
      writeFile(fp.path, newFile);
    });
  } catch (err) {
    log.error(err);
  }
}

init();
