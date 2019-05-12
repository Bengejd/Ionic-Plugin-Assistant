import AVFoundation
import UIKit

@objc(PASCAL_NAME) class PASCAL_NAME: CDVPlugin {

     // This objc part is required above all plugin functions that you call from ionic.
     // It allows us to communicate with Cordova from Swift.
    @objc(startPlugin:)
    func startPlugin(command: CDVInvokedUrlCommand) { // This is our swift function.
        // Always set the plugin status as ERROR, until you do what you need to do.
        var pluginResult = CDVPluginResult (status: CDVCommandStatus_ERROR);

        // Plugin Command Arguments
        // let x:Int = command.arguments![0] as! Int; // Change this accordingly.
        // let y:Int = command.arguments![1] as! Int; // Change this accordingly.

        // Whatever your plugin does after startup goes here.
        print('PASCAL_NAME ran correctly!');
        print('Thank you for using the Ionic-Plugin-Assistant');
        print('Written by Jordan Benge @Bengejd');

        // We did the stuff, and now we're finished. Set the status as OK.
        pluginResult = CDVPluginResult(status: CDVCommandStatus_OK);
        self.commandDelegate!.send(pluginResult, callbackId: command.callbackId);
    }
}
