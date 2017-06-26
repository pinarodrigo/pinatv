(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "pinarodrigo",
        devKey: "AIzaSyDF3s3ojZ57JsJ9ojxtFQdwMF_uJAt4Xbw",
        showLatestChannel: true,
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));