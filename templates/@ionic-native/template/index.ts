import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

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
  startPlugin(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
    return;
  }
}
