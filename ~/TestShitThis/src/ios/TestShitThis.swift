
// MARK: Cordova Exposures.
// MARK: BIG PICTURE FUNCTIONS
    @objc(startPlugin:)
        var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);


@objc(TestShitThis) class PASCAL_NAME: CDVPlugin {
        // Plugin Command Arguments
    func startPlugin(command: CDVInvokedUrlCommand) {
        //let x:Int = command.arguments![0] as! Int; // Change this accordingly.


        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK);
}
    }
import UIKit
import AVFoundation
        // Whatever your plugin does afert startup goes here.
