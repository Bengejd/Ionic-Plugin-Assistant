const log = require('clg-color');

export async function setPluginNames() {

  const split = global.PLUGIN_NAME.split(' '); // Last Cam
  const dashedName = global.PLUGIN_NAME.replace(' ', '-'); // last-cam
  const lowerName = global.PLUGIN_NAME.toLowerCase(); // last cam
  const cordovaName = 'cordova-plugin-' + dashedName; // cordova-plugin-last-cam

  log.info(
    `
    Lowercase: ${lowerName} 
    Cordova: ${cordovaName} 
    Pascal: ${pascalName}
    Dashed: ${dashedName}`
  )
}

export async function pascalName(name) {

}

export async function cordovaName(name) {

}
