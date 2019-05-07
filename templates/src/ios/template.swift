import AVFoundation
import UIKit

@objc(PASCAL_NAME) class PASCAL_NAME: CDVPlugin {
    @objc(startPlugin:)
    func startPlugin(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);

        // Plugin Command Arguments
        //let x:Int = command.arguments![0] as! Int; // Change this accordingly.

        // Whatever your plugin does after startup goes here.

        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK);
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
    }
}
