/// <reference path="_References.ts" />
/// <reference path="../System/ConfigBase.ts" />

/**
    App
    @namespace App
*/
module App {
    export class Config extends System.ConfigBase {
        //if user does not have gps pos, start here by default (oslo sentrum)
        public mapStartPos: System.Models.Position = new System.Models.Position(59.9122, 10.7517);

        public europeana_APIKey: string = "XzRpLCzHj"; // registered to tedd@konge.net
        public europeana_PrivateKey: string = "nswjZUBKH"; // registered to tedd@konge.net
        public europeanaURL: string = "http://europeana.eu/api//v2/search.json?callback=?&query=";

        public norvegianaAutoRetryDelaySeconds: number = 10;
        public norvegianaAutoRetryCount: number = 3;
        public norvegianaSearchTimeoutSeconds: number = 30;
        public searchTimeoutSeconds: number = 30;
        public norvegianaURL: string = 'http://kn-reise.delving.org/organizations/kn-reise/api/search?query=';
        public ssrURL: string = 'https://ws.geonorge.no/SKWS3Index/ssr/sok';
         
        // For "prod"
        //public routeAdminIndexUrl: string = "http://knappen.konge.net/KNappenService.Prod/api/RouteIndex";
        //public routeAdminDownloadUrl: string = "http://knappen.konge.net/KNappenService.Prod/api/Route";
        //public poiTypeDataUrl: string = "http://knappen.konge.net/KNappenService.Prod/FileService.aspx?file=TypeInfo.json";
        //public feedbackUrl: string = "http://knappen.konge.net/KNappenService.Prod/api/Feedback";
        //public adminRouteUrl: string = "http://knappen.konge.net/KNappenService.Prod/api/Route";
        //public webProxy: string = "http://knappen.konge.net/KNappenService.Prod/WebProxy.aspx?url=";

        public numSearchProviders: number = 3;
        public digitakArkivetPropertyCategory: string = "Historie og samfunn";


        public templatePOIDetailsView: string = "Views/POIDetails.html";
        public templateAboutView: string = "Views/About.html";
        public templatePOIPreview: string = "POIPreview.html";
        
        // For local debugging
        public routeAdminIndexUrl: string = "http://localhost:42001/api/RouteIndex";
        public routeAdminDownloadUrl: string = "http://localhost:42001/api/Route";
        public poiTypeDataUrl: string = "Files/TypeInfo.txt";
        public feedbackUrl: string = "http://localhost:42001/api/Feedback";
        public adminRouteUrl: string = "http://localhost:42001/api/Route";
        public webProxy: string = "http://localhost:42001/WebProxy.aspx?url=";

        public configInit() {  
            this.poiTypeDataUrl = this.fixLocalFileRef(this.poiTypeDataUrl);
        
        }

    }
}
var config = new App.Config();
config.configInit();