//
//  WikitudeArchitectSDK.h
//  WikitudeArchitectSDK
//
//  Copyright (c) 2012 Wikitude. All rights reserved.
//

#import <UIKit/UIKit.h>

@class CMMotionManager;
@class WTArchitectView;

typedef NS_ENUM(NSUInteger, WTARMode){
    WTARMode_Geo,
    WTARMode_IR
};


/**
 * WTArchitectViewDelegate
 *
 * The ArchitectUrlListener offers the native app the possibility to react on events that are triggered inside the ARchitect World. To initiate such an event, the ARchitect World simply has to make an request for an url with the "architectsdk" as protocol. E.g.: architectsdk://opendetails?id=123.
 *
 * An registered WTArchitectViewDelegate receives all requested "architectsdk://" urls and must therefore be able to parse the url and parameters to react accordingly.
 *
 */
@protocol WTArchitectViewDelegate <NSObject>

@required
/**
* Supplied URL was called and should be opened. URL starts with architectsdk:// protocol prefix and is otherwise custom to the ARchitect World that requests it. 
*
* @param url The url which was called in javascript.
*/ 
- (void)urlWasInvoked:(NSString*)url;


@optional

/**
 * This method gets called when the provided architect world url failed to load.
 *
 * @param architectView The ArchitectView which failed to load the url.
 *
 * @param error An NSError object containing more informations why the load did fail.
*/
- (void)architectView:(WTArchitectView *)architectView didFailLoadWithError:(NSError *)error;

@end


/**
 * WTArchitectView class
 *
 *This class allows you to load and display the content from ARchitect Worlds.
 *It is the "Entry Point" to the SDK which exposes all SDK functionality. Instantiating and adding this Component to the UI should be sufficient to use ARchitect in any application. 
 *
 */
@interface WTArchitectView : UIView
{
    __unsafe_unretained id<WTArchitectViewDelegate>                                     delegate;
}

/** @name Managing the Delegate */
/**
* The object that acts as the delegate of the receiving WTArchitectView 
* 
*/ 
@property (nonatomic, unsafe_unretained) id<WTArchitectViewDelegate>                    delegate;
@property (nonatomic, assign) BOOL                                                      shouldWebViewRotate;
@property (nonatomic, readonly) BOOL                                                    isRunning;

/** @name Initializing a WTArchitectView Object */
/**
* Initializes the ARchitect view with the specified license key and motion manager that will be shared by the Wikitude SDK and the third party application.
* If a motion manager instance is passed, it will be set to Wikitudes preferred settings (update intervals etc.)
* The motion manager argument may be nil in which case Wikitude creates and manages its own motion manager instance.
* 
*  -
*
* @param key Your developer key, provided with your licence information.
* @param motionManager The CMMotionManager instance which should be used from the SDK.
*/
- (void)initializeWithKey:(NSString*)key motionManager:(CMMotionManager*)motionManager;


/** @name Accessing Device Compatibility */
/**
 * Returns true if the device supports the requested ARMode, false otherwise.
 *
 * @param supportedARMode Enum value which describes the required ARMode.
 *
 * @return true if the requested ARMode is supported for the current device, false otherwise.
 *
 * @discussion If the device supports ARMode_Geo, also ARMode_IR is supported.
 */
+ (BOOL)isDeviceSupportedForARMode:(WTARMode)supportedARMode;


/** @name Loading Architect Worlds */
/**
* Replaces the existing content of the ArchitectView with the one from the supplied URL.
*  @param architectWorldUrl The url that points to the Architect world. This can be eather a local .html file or a url, pointing to a file on a server or to your dropbox.
*/
- (void)loadArchitectWorldFromUrl:(NSString*)architectWorldUrl;


/** @name Interacting with Architect Worlds */
/**
* Executes the passed JavaScript string in the context of the currently loaded ARchitect World. This can be used to pass data to the ARchitect World or to notify it of external events. 
* @param javaScript A string, representing the javascript code which should be executed.
*/ 
- (void)callJavaScript:(NSString*)javaScript;


/** @name Injecting Locations */
/**
 * Injects the supplied location information. To use the injected location setUseInjectedLocation(true) has to be called. 
 * @param latitude The latitude that has to be simulated.
 * @param longitude The longitude that has to be simulated.
 * @param altitude The to altitude that has to be simulated.
 * @param accuracy The accuracy of the simulated location.
 */ 
- (void)injectLocationWithLatitude:(float)latitude longitude:(float)longitude altitude:(float)altitude accuracy:(float)accuracy;


/**
* Injects the supplied location information. To use the injected location setUseInjectedLocation(true) has to be called. 
 * @param latitude The latitude that has to be simulated.
 * @param longitude The longitude that has to be simulated.
 * @param accuracy The accuracy of the simulated location.
*/ 
- (void)injectLocationWithLatitude:(float)latitude longitude:(float)longitude accuracy:(float)accuracy;


/**
* If true is supplied the injected location will be used. If false is supplied the default location provider will be used. 
* @param useInjectedLocation The location simulation status
*/ 
- (void)setUseInjectedLocation:(BOOL)useInjectedLocation;


/**
* True if an injected location is currently used. false if default location provider is used.
* @return Indicates, if the location provider is simulating the injected location.
*/ 
- (BOOL)isUsingInjectedLocation;


/** @name Manipulating Object Visibility */
/**
 * Sets the culling distance in meters. Objects in AR that are further away won’t be visible. The default value is 50000 meters (= 50 km).
 * @param cullingDistance The culling distance that has to be applied to your AR objects.
 */
- (void)setCullingDistance:(float)cullingDistance;


/**
 * Retrieves the current culling distance in meters.
 * @return The current culling distance, used by the SDK.
 */ 
- (float)cullingDistance;


/** @name Accessing ARchitect settings */
/**
 * Use this method to get the current ARchitect version number
 *
 * @return The current available ARchitect verison within the SDK.
 */
- (NSString *)versionNumber;


/**
 * Use this method to clear all cached data and requests.
 *
 * This method clears the internal SDK cache, as well as the cache used by the webView.
 * 
 */
- (void)clearCache;


/** @name Managing the WTArchitectView rotation behavior */
/**
 * Use this method to set the auto rotation behavior for the WTArchitectview.
 *
 * You should pass YES if you wan't your WTArchitectView to autoamtically change rotation to the new interface orientation.
 *
 * @param shouldAutoRotate Should your SDK view change orientation automatically
 * @param interfaceOrientation The interface orientation the device is going to take on
 */
- (void)setShouldRotate:(BOOL)shouldAutoRotate toInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation;


/**
 * Retrieves the current auto rotate behavior.
 *
 * @return The current auto rotation option, used by the SDK.
 */
- (BOOL)isRotatingToInterfaceOrientation;


/** @name Managing the WTArchitectView updates */
/**
* Stops all activity of the ARchitect view (suspends UI updates of background camera, AR objects etc). 
*/
- (void)stop;


/**
* Starts activity of the ARchitect view (starts UI updates of background camera, AR objects etc).
*/ 
- (void)start;


/** @name Interacting with Device Motion */
/**
* Returns the motion manager used by the Wikitude SDK.
* @return  The CMMotionManager instance, provided in the method "InitializeWithKey:motionManager", otherwise nil;
*/ 
- (CMMotionManager*)motionManager;


- (void)persistObjectsToDisk;
- (void)setSDKOrigin:(NSString *)origin;

- (void)setPresentingViewController:(UIViewController *)thePresentingViewController;

@end