const log = require('clg-color');

export async function createNameVariations(opts) {
  global.CORDOVA_NAME = global.PLUGIN_NAME;
  const baseName = global.PLUGIN_NAME.replace('cordova-plugin-', '');
  const splitName = baseName.split('-');
  splitName.map((n) => {
    return global.PASCAL_NAME += n.charAt(0).toUpperCase() + n.slice(1);
  });
  log.info('PASCAL_NAME: ', global.PASCAL_NAME);
}
