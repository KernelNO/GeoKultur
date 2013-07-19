/// <reference path="../_References.ts" />

/**
    Controller modules
    @namespace App.Controllers
*/
module App.Controllers {
    export class WindowSizeController {

        public _window: any;
        public headerSectionSize: any;
        public headerSection: any;
        public mainSection: any;
        public footerSection: any;
        public map: any;
        public originalHeaderSectionHeight: number;

        public Load() {
            this._window = $(window);
            this.headerSectionSize = $("#headerSectionSize");
            this.headerSection = $("#headerSection");
            this.mainSection = $("#mainSection");
            this.footerSection = $("#footerSection");
            this.map = $("#map");

            this.originalHeaderSectionHeight = this.headerSection.css('height');
            this.resize();
        }

        public PreInit() {
            var _this = this;
            jQuery(window).resize(function () { _this.resize(); });
            viewController.addSelectEvent(function (event, oldView, newView) {
                _this.resize();
            });
        
        }

        public PostInit() {
            this.resize();
        }

        public resize() {
            var windowHeight = this._window.height();
            var headerHeight = this.headerSection.height();
            var footerHeight = this.footerSection.height();
            var mainHeight = windowHeight - headerHeight - footerHeight;

            if (!viewController || !viewController.getCurrentView() || viewController.getCurrentView().name != "arView") {
                this.headerSectionSize.css('height', headerHeight + "px");
                this.mainSection.css('height', mainHeight + "px");
                this.map.css('height', mainHeight + "px");
                setTimeout(function () {
                    if (mapController.mapProvider)
                        mapController.mapProvider.map.updateSize();
                }, 50);

                log.debug("WindowSizeController", "Resizing mainSection to " + mainHeight + "px (windows: " + windowHeight + ", header: " + headerHeight + ", footer: " + footerHeight + ")");
            }


        }

        public ShowTopMenu() {
            this.headerSection.show();
            this.headerSection.css('height', this.originalHeaderSectionHeight);
            this.headerSectionSize.css('height', this.originalHeaderSectionHeight);
            this.resize();
        }

        public HideTopMenu() {
            this.headerSection.css('height', '0px');
            this.headerSectionSize.css('height', '0px');
            this.headerSection.hide();
            this.resize();
        }
    }
}
var windowSizeController = new App.Controllers.WindowSizeController();
startup.addLoad(function () { windowSizeController.Load(); });
startup.addPreInit(function () { windowSizeController.PreInit(); });
startup.addPostInit(function () { windowSizeController.PostInit(); });