const log = require('clg-color');

export async function getFilePaths() {
  const pn = global.PLUGIN_NAME;

  const typesPath = {
    name: 'ion-native',
    template: './templates/@ionic-native/PASCAL_NAME/index.ts',
    path: `./@ionic-native/${pn}/`
  }
}
