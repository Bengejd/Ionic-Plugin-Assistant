import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
 * @description
import { Injectable } from '@angular/core';
 * @name TestShitThis
import { Observable } from 'rxjs/Observable';
 * DESCRIPTION

 *
 */
 * TestShitThisStartupOptions
export interface TestShitThis_INTERFACE_OPTIONS {

  option?: any;
//   pluginName: 'Camera',

}
//   plugin: 'cordova-plugin-camera',
// @Plugin({
//   platforms: ['Android', 'Browser', 'iOS', 'Windows']
//   repo: 'https://github.com/apache/cordova-plugin-camera',
// })
//   pluginRef: 'navigator.camera',
@Plugin({

  pluginRef: 'TestShitThis',
  plugin: 'test-shit-this',
  repo: 'REPO',
  platforms: ['PLATFORMS'],
 * @interfaces
export class TestShitThis extends IonicNativePlugin {
  /**
  pluginName: 'TestShitThis',
   * @return {Promise<any>}
   * @param {TestShitThis_INTERFACE_OPTIONS} options
})
  @Cordova({
   * Starts TestShitThis.
    successIndex: 1,
    errorIndex: 2,
  StartTestShitThis(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
  })
    return;
  }
}
/**
   */
@Injectable()
