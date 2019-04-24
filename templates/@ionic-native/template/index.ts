import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

/**
 * @name PASCAL_NAME
 * @description
 * DESCRIPTION
 *
 * @interfaces
 * PASCAL_NAMEStartupOptions
 */

export interface PASCAL_NAME_INTERFACE_OPTIONS {
  option?: any;
}

// @Plugin({
//   pluginName: 'Camera',
//   plugin: 'cordova-plugin-camera',
//   pluginRef: 'navigator.camera',
//   repo: 'https://github.com/apache/cordova-plugin-camera',
//   platforms: ['Android', 'Browser', 'iOS', 'Windows']
// })

@Plugin({
  pluginName: 'PASCAL_NAME',
  plugin: 'CORDOVA_NAME',
  pluginRef: 'PASCAL_NAME',
  repo: 'REPO',
  platforms: ['PLATFORMS'],
})
@Injectable()
export class PASCAL_NAME extends IonicNativePlugin {
  /**
   * Starts PASCAL_NAME.
   * @param {PASCAL_NAME_INTERFACE_OPTIONS} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  StartPASCAL_NAME(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
    return;
  }
}
