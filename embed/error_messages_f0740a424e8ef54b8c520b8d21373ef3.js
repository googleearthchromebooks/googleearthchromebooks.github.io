'use strict';

// used for reference
window.FrameErrorCodes = {
// -- player error codes
    ONEMINUTE:0,
    DISCONNECTED:1,
    FIREWALL:2,
    DISTANCE:3,
    REPORT:4,
    INTRUSION:5,
    INACTIVE_LASTMINUTE:6,
    INACTIVE_SLEEP:7,
    INACTIVE_CLOSED:8,
// -- gateway error codes
    NO_POOL:17,
    NO_ACCESS:18,
    REQUEST_FAILED:19,
    ALL_FULL:20,
    USERNAME_NA:21,
    CANNOT_FIND_USER:22,
    MAX_SESSION_LIMIT:23,
    NO_SESSION:24,
    SESSION_CLOSED:25,
    NO_APPLICATION:26,
    BAD_VERSION:28,
    USER_ALREADY_REG:29,
    USER_ALREADY_REG_ACC_DEA:30,
    CANNOT_ADD_USER:31,
    CANNOT_FIND_UG:32,
    CANNOT_FIND_PG:33,
    UNKNOWN_STORAGE:34,
    UNSUPPORTED_ACTION:35,
    MOUNTING_ERROR:36,
    NO_TOKEN:37,
    APPLICATION_NOT_ACTIVE:39,
    APPLICATION_NO_LONGER_AVAILABLE:42,
    SANDBOX_STARTING_UP:40,
    ZERO_PRODUCTION_INSTANCES:41,
    AUTHENTICATION_PROBLEM:45,
    STARTING_NEW_SRV_ELAS:57, // trigger elasticity instances
    TIME_BETWEEN_SESSIONS:76,
    SESSION_CLOSING:77,
    ADMIN_EXPIRED: 78,
    USER_OUT_OF_HOURS:79,
    USER_EXPIRED:82,
//  --- static placeholder errors
    NET_ERROR:100,
    BROWSER:101,
    SAFARI_WEBGL:102,
    IMG_AUTH: 103,
    IOS_NATIVE_TERMINAL_MISSING: 104,
    INVALID_TOKEN: 105,
//  --- non gw statuses
    SANDBOX_ALL_FULL: 120
};

window.frameTemplate = function(str, data) {
    return str.replace(/%\{(\w*)\}/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
}

window.FrameErrorTitle = function (errorCode, data) {
    data = typeof data !== 'undefined' ? data : {};
    data.code = errorCode;

    var errorString = "";
    switch(parseInt(errorCode))
    {
        case 110:
            errorString = "ERROR";
            break;
        case 22:
            errorString = "The system is busy";
            break;
        case 120:
            errorString = "The system is busy";
            break;
        case 100:
            errorString = "Can\'t reach Frame";
            break;
        case 23:
            errorString = "Connection refused";
            break;
        case 102:
            errorString = "You need to enable WebGL";
            break;
        case 103:
            errorString = "Authentication did not complete";
            break;
        case 42:
            errorString = "You\'ve narrowly missed us...";
            break;
        case 40:
            errorString = "Sandbox is starting up";
            break;
        case 39:
            errorString = "Application unavailable";
            break;
        case 41:
            errorString = "The system is powered off";
            break;
        case 45:
            errorString = "Authentication did not complete";
            break;
        case 57:
            errorString = "Instance is starting";
            break;
        case 104:
            errorString = "Frame iOS Terminal is not installed. Please contact us at support@fra.me if you would like to get access to Frame iOS Terminal";
            break;
        case 76:
            errorString = "YOUR SYSTEM IS STARTING";
            break;
        case 77:
            errorString = "Session is closing";
            break;
        case 79:
            errorString = "Insufficient balance";
            break;
        case 82:
            errorString = "Your account has expired.";
            break;
        case 0:
            errorString = "Sorry to interrupt you, but...";
            break;
        case 1:
            errorString = "Lost connection with Frame";
            break;
        case 2:
            errorString = "Sorry, your connection failed at this time";
            break;
        case 3:
            errorString = "You are connected to a server that’s at least miles away";
            break;
        case 4:
            errorString = "Request sent";
            break;
        case 5:
            errorString = "Application was terminated";
            break;
        case 6:
            errorString = "Disconnecting in 60 seconds...";
            break;
        case 7:
            errorString = "Disconnected due to inactivity";
            break;
        case 8:
            errorString = "Disconnected due to inactivity";
            break;
        case 25:
            errorString = "Your system is currently not available";
            break;
        case 20:
            errorString = "The system is busy";
            break;
        case 78:
            errorString = "Host\'s account has expired";
            break;
        case 105:
            errorString = "Refresh your authentication token";
            break;
        case 107:
            errorString = "PROBLEM WITH YOUR FILE UPLOAD";
            break;
        case 101:
            errorString = "Your browser is not currently supported ";
            break;
        case 106:
            errorString = "Can\'t reach Frame";
            break;
        case 9:
            errorString = "Session is closed";
            break;
        default:
            errorString = "That. Did. Not. Work.";
            break;
    }
    errorString = frameTemplate(errorString, data);
    return errorString;
}

window.FrameErrorMessage = function (errorCode, data) {
    data = typeof data !== 'undefined' ? data : {};
    data.code = errorCode;

    var errorString = "";
    switch(parseInt(errorCode))
    {

        case 110:
            errorString = "This card was declined.";
            break;
        case 22:
            errorString = "If you just closed a session, try again in 15 seconds, otherwise someone else is using it, so try again later.\n";
            break;
        case 120:
            errorString = "If you just closed a session, try again in 15 seconds,<br/>otherwise someone else is using it, so try again later.\n";
            break;
        case 100:
            errorString = "Hmmm... It\'s taking much longer than usual for our servers to respond to your request. Please check your network and Internet connectivity and try again.\n";
            break;
        case 23:
            errorString = "It looks like you already connected to Frame (possibly in another browser tab). Please make sure you have no active connection to Frame and try again.\n";
            break;
        case 102:
            errorString = "1. Open the Safari menu, select Preferences.<br/>2. Select Advanced tab.<br/>3. Check \\\'Show Develop menu\\\'.<br/>4. Open the Develop menu, select \\\'Enable WebGL\\\'.<br/>5. Refresh.\n";
            break;
        case 103:
            errorString = "The authentication pop-up closed before the authentication process completed. Please retry signing in.\n";
            break;
        case 42:
            errorString = "This exclusive technology preview has moved. <br/>To see how Frame works and to run software in your browser, go to <a href=\\\'http://fra.me/live\\\' target=\\\'_blank\\\'>fra.me/live<\/a>";
            break;
        case 40:
            errorString = "The sandbox instance is starting up. Please wait 2 minutes and retry.\n";
            break;
        case 39:
            errorString = "The application you are trying to connect to is no longer available at this URL. <br/> Please contact your application provider for an updated link and/or more details.\n";
            break;
        case 41:
            errorString = "Please contact your app provider or administrator to turn on system capacity.\n";
            break;
        case 45:
            errorString = "We could not properly validate your identity. Please sign out and sign in again.\n";
            break;
        case 57:
            errorString = "Your instance is starting. Please try again in a few minutes.\n";
            break;
        case 104:
            errorString = "Frame iOS Terminal is not installed. Please contact us at support@fra.me if you would like to get access to Frame iOS Terminal\n";
            break;
        case 76:
            errorString = "You have just powered off your instance. Please try again in 2 minutes.\n";
            break;
        case 77:
            errorString = "Your session is closing. Please wait 2 minutes and retry.\n";
            break;
        case 79:
            errorString = "There’s not enough balance to run this application. Please add to your balance from the account page, then come back here to start an app.\n";
            break;
        case 82:
            errorString = "You cannot run this application because your account has expired.\n";
            break;
        case 0:
            errorString = "You are one minute away from the session time limit that was configured for this application.<br/><br/>Please save your work, if applicable, and close the app.\n";
            break;
        case 1:
            errorString = "It\'s been at least 15 seconds since the last communication with Frame. <br/><br/>Please check your network connection.\n";
            break;
        case 2:
            errorString = "A connection to the application could not be made.  Please try again and/or contact your application provider.\n";
            break;
        case 3:
            errorString = "Even though network packets travel at close to the speed of light, you’re far enough from our servers that you may notice some lag as you type and move the mouse.\n";
            break;
        case 4:
            errorString = "Your request has been sent. Thanks!\n";
            break;
        case 5:
            errorString = "Application was terminated due to security concerns. <br/><br/>To find out more, please send e-mail to support@fra.me and mention this error. \n";
            break;
        case 6:
            errorString = "Your session will disconnect in 60 seconds. Click Resume to stay in the session.\n";
            break;
        case 7:
            errorString = "Your session was disconnected after %{n_minutes} minutes of inactivity to conserve resources.\n";
            break;
        case 8:
            errorString = "Your session was disconnected after %{n_minutes} minutes of inactivity to conserve resources.\n";
            break;
        case 25:
            errorString = "Sorry, but the session you\'re trying to connect to has ended. <br/><br/> To start a new session, you may need to click \"Power off\" and wait about a minute or refresh your web page and try again.  If you were sharing a session started by someone else, contact them to start a new session. \n";
            break;
        case 20:
            errorString = "All systems for this account are currently in use.  Please try again later or request more capacity for this account.";
            break;
        case 78:
            errorString = "Please contact your application’s host for additional information.\n";
            break;
        case 105:
            errorString = "Your authentication token is no longer valid.  Please sign out of your account and sign back in to refresh your token.";
            break;
        case 107:
            errorString = "Your file upload has failed. Please try again in a couple of minutes. If the problem persists, contact us at support@fra.me.\n";
            break;
        case 101:
            errorString = "The browser on your device is not currently supported by Frame.  Please try again from the latest versions of Chrome, Firefox or Safari on a Windows PC, Linux PC or Mac or from a Chromebook or iOS 8 device. <br/><br/>If you\'re trying to connect from other browsers and devices, let us know at support@fra.me.";
            break;
        case 106:
            errorString = "Hmmm… It seems that you are offline. Please check your network and Internet connectivity and try again.\n";
            break;
        case 9:
            errorString = "Session time limit that was configured for this application has been reached.\n";
            break;
        default:
            errorString = "We\'re sorry, but we don\'t know what caused this error. You can help us fix it by sending a problem description and the time of the error to support@fra.me (mention error code %{code})\n";
            break;

    }
    errorString = frameTemplate(errorString, data);
    return errorString;
}
