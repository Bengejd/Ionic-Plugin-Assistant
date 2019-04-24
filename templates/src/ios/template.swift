// MARK: Cordova Exposures.

import AVFoundation
import UIKit

// MARK: BIG PICTURE FUNCTIONS
@objc(PASCAL_NAME) class PASCAL_NAME: CDVPlugin {
    @objc(startPlugin:)
    func startPlugin(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);

        // Plugin Command Arguments
        //let x:Int = command.arguments![0] as! Int; // Change this accordingly.

        // Whatever your plugin does afert startup goes here.

        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK);
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
    }
}
