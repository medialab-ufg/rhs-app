#!/usr/bin/env node

var filestocopy = [{
    "resources/android/notification_icon/drawable-hdpi-icon.png":
        "platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/notification_icon/drawable-mdpi-icon.png":
        "platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/notification_icon/drawable-xhdpi-icon.png":
        "platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/notification_icon/drawable-xxhdpi-icon.png":
        "platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/notification_icon/drawable-xxxhdpi-icon.png":
        "platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
} ];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        //console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
                fs.createWriteStream(destfile));
        }
    });
});
