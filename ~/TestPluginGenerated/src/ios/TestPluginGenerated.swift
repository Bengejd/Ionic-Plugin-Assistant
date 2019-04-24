// MARK: Cordova Exposures.
import UIKit

    func startPlugin(command: CDVInvokedUrlCommand) {

@objc(TestPluginGenerated) class PASCAL_NAME: CDVPlugin {
        var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);
        // Plugin Command Arguments

        //let x:Int = command.arguments![0] as! Int; // Change this accordingly.
// MARK: BIG PICTURE FUNCTIONS
        // Whatever your plugin does afert startup goes here.

import AVFoundation
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK);
    }

    @objc(startPlugin:)
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
}
