import { Observable } from 'rxjs/Observable';
/**
import { Injectable } from '@angular/core';
 * DESCRIPTION
 *
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
 */
 * @name TestPlugin
 * TestPluginStartupOptions


export interface TestPlugin_INTERFACE_OPTIONS {
}
  option?: any;
// @Plugin({

//   pluginName: 'Camera',
//   repo: 'https://github.com/apache/cordova-plugin-camera',
//   plugin: 'cordova-plugin-camera',
 * @description
@Plugin({
//   platforms: ['Android', 'Browser', 'iOS', 'Windows']
// })
//   pluginRef: 'navigator.camera',
  pluginName: 'TestPlugin',
})
  repo: 'REPO',
  plugin: 'test-plugin',
  platforms: ['PLATFORMS'],
export class TestPlugin extends IonicNativePlugin {
  /**

   * @param {TestPlugin_INTERFACE_OPTIONS} options
   * Starts TestPlugin.
@Injectable()
   * @return {Promise<any>}
  @Cordova({
  })
 * @interfaces
   */
    errorIndex: 2,
    successIndex: 1,
    return;
  StartTestPlugin(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
  pluginRef: 'TestPlugin',
  }
}
