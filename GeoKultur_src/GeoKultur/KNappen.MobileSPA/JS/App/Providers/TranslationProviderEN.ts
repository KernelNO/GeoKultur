/// <reference path="../_References.ts" />

/**
    Providers
    @namespace App.Providers
*/
module App.Providers {

    export class TranslationProviderEN {

        /**
            TranslationProviderNB
            @class App.Providers.TranslationProviderNB
            @classdesc Provides norwegian (bokmål) translation
        */
        constructor() {
        }

        /**
            PreInit adds translation for the selected english words, into norwegian
            @method App.Providers.TranslationProviderNB#PreInit
            @public
        */
        public Load() {
            log.debug("TranslationProviderNB", "Load()");

            // Add translation for Norsk Bokmål
            translater.addTranslation("TIMEOUT", "Timeout");
            translater.addTranslation("TIMEOUT_SEARCH_TOTAL", "Timeout during search; {0} of {1} sources returned data.");
            translater.addTranslation("TIMEOUT_NORVEGIANA_SEARCH", "Timeout searching Norvegiana.");
            translater.addTranslation("TIMEOUT_NORVEGIANA_RETRY", "Retrying search...");
            translater.addTranslation("SETTINGS", "Settings");
            translater.addTranslation("SETTINGS_SAVED", "Settings has been saved.");
            translater.addTranslation("UNDEFINED", "Undefined");
            translater.addTranslation("PreCache", "Precache");
            // Etc ... just let it default on stuff
            //translater.addTranslation("Done precaching", "Done precaching.");
            //translater.addTranslation("DISTANCE", "Distance");
            //translater.addTranslation("Genre", "Genre");
            //translater.addTranslation("Subjects", "Subjects");
            //translater.addTranslation("Mediatypes", "Mediatypes");
            //translater.addTranslation("Search", "Search");
            //translater.addTranslation("Number of hits from each datasource", "Number of hits from each datasource");
            //translater.addTranslation("Text", "Text");
            //translater.addTranslation("Recommended", "Recommended");
            //translater.addTranslation("User defined", "User defined");
            //translater.addTranslation("Startup settings", "Startup settings");
            //translater.addTranslation("Adminpassword", "Adminpassword");
            //translater.addTranslation("Start view", "Start view");
            //translater.addTranslation("Default number of results", "Default number of results");
            //translater.addTranslation("Default search distance", "Default search distance");
            //translater.addTranslation("Default map type", "Default map type");
            //translater.addTranslation("Default zoom level", "Default zoom level");
            //translater.addTranslation("Functional error", "Functional error");
            //translater.addTranslation("Comment on content", "Comment on content");
            //translater.addTranslation("Your email address", "Your email address");
            //translater.addTranslation("Send feedback", "Send feedback");
            //translater.addTranslation("Create", "Opprett");
            //translater.addTranslation("Description", "Beskrivelse");
            //translater.addTranslation("More information", "Mer informasjon");
            //translater.addTranslation("Map", "Kart");
            //translater.addTranslation("Camera", "Kameravisning");
            //translater.addTranslation("List", "Liste");
            //translater.addTranslation("Routes", "Ruter");
            //translater.addTranslation("Search", "S&oslash;k");
            //translater.addTranslation("Settings", "Innstillinger");
            //translater.addTranslation("Feedback", "Tilbakemelding");
            //translater.addTranslation("About", "Om appen");
            //translater.addTranslation("Debug log", "Debug log");
            //translater.addTranslation("Map", "Kart");
            //translater.addTranslation("Wikipedia article", "Artikkel på Wikipedia");
            //translater.addTranslation("No datasources", "Ingen datakilder");
            //translater.addTranslation("Search criteria results in 0 datasources. Try modifying your search.", "S&oslash;kekriteriene angitt gir 0 datakilder. Pr&oslash;v &aring; endre s&oslash;kekriterier.");
            //translater.addTranslation("Error searching", "Feil ved søk");
            //translater.addTranslation("Route created", "Rute opprettet");
            //translater.addTranslation("The route '{0}' was created.", "Ruten '{0}' ble opprettet.");
            //translater.addTranslation("Follow route", "F&oslash;lg rute");
            //translater.addTranslation("Edit", "Rediger");
            //translater.addTranslation("Published", "Publisert");
            //translater.addTranslation("The route has been published.", "Ruten har blitt publisert.");
            //translater.addTranslation("Not published", "Ikke publisert");
            //translater.addTranslation("The route has not been published.", "Ruten ble ikke publisert.");
            //translater.addTranslation("Delete", "Slett");
            //translater.addTranslation("{0} hits found", "{0} treff funnet");
            //translater.addTranslation("Subjects", "Emneord");
            //translater.addTranslation("Dating", "Datering");
            //translater.addTranslation("Source", "Kilde");
            //translater.addTranslation("Original version", "Original versjon");
            //translater.addTranslation("Creator", "Opphavsperson");
            //translater.addTranslation("License", "Lisens");
            //translater.addTranslation("External links", "Eksterne lenker");
            //translater.addTranslation("Search for place", "S&oslash;k i stedsnavn");
            //translater.addTranslation("My position", "Min posisjon");
            //translater.addTranslation("Zoom in", "Zoom inn");
            //translater.addTranslation("Zoom out", "Zoom ut");
            //translater.addTranslation("Change map layer", "Bytt kartlag");
            //translater.addTranslation("Feedback sent", "Tilbakemelding sendt.");
            //translater.addTranslation("Error sending feedback", "Feil ved sending av tilbakemelding.");
            //translater.addTranslation("Loading", "Laster");
            //translater.addTranslation("Buffering...", "Mellomlagrer...");
            translater.addTranslation("AboutTheData", "About the data");
        }
    }
}

var translationProviderEN = new App.Providers.TranslationProviderEN();
startup.addLoad(function () { translationProviderEN.Load(); }, "TranslationProviderEN");
