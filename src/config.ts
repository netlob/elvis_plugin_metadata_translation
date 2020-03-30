export class Config {
    /**
     * Elvis server url.
     */
    static elvisUrl: string = process.env.IR_ELVIS_URL || 'http://localhost:8080';


    /**
     * HTTP Port where the app runs.
     */
    static httpPort: string = process.env.IR_HTTP_PORT || '7080';


    /**
     * CORS header. Default value is elvisUrl. You can change this value to, for example '*' to open up access to other domains than the Elvis URL. 
     * This can be useful when tou want to access the Image Recognition Server API from a non - Elvis web client webpage.
     * 
     * Note: with Elvis 6.7 or higher, it's advised to keep the setting default and access the API via the Elvis Server which adds authentication.
     * In this case you configure the cors settings in Elvis Server: https://helpcenter.woodwing.com/hc/en-us/articles/115002689986-Elvis-6-API-cross-origin
     */
    static corsHeader: string = process.env.IR_CORS_HEADER || Config.elvisUrl;

    /**
     * Elvis username. 
     * 
     * Permission configuration:
     * - This user should be licensed as an API user.
     * - Ensure that the user can access the preview of all images imported in Elvis.
     */
    static elvisUsername: string = process.env.IR_ELVIS_USER || 'importmodule';

    /**
     * Elvis password.
     */
    static elvisPassword: string = process.env.IR_ELVIS_PASSWORD || 'changemenow';

    /**
     * Elvis webhook token. Create a webhook that listens for "asset_update_metadata" events and that returns the "assetDomain" metadata field.
     * 
     * More info on creating a webhook: https://helpcenter.woodwing.com/hc/en-us/articles/115001884346
     */
    static elvisToken: string = process.env.IR_ELVIS_TOKEN || 'bbcG04VeVJi0gR8/2y/RmQ==';

    /**
     * Full path to the Google Service account keyfile (JSON).  
     *
     * Can be obtained by creating a Google Cloud account: https://cloud.google.com/vision/
     * 
     * Steps when starting from scratch with Google Vision:
     * - Create a new project.
     * - Enable the Cloud Vision API (API Manager -> Library -> Vision API).
     * - Create a service account key (API Manager -> Credentials -> Create Credentials - Service account key).
     * - Specify the full path to the JSON keyfile in this setting.
     */
    //   static googleKeyFilename: string = process.env.IR_GOOGLE_KEY_FILENAME || '/Users/hans.bolten/google-vision.json';
    static googleKeyFilename: string = process.env.IR_GOOGLE_KEY_FILENAME || '../sjoerd.json';

    /**
     * Comma separated list of languages in which the generated tags are translated. Default value is empty 
     * which means translation of tags is disabled
     * 
     * Google Translate is used as translation service.
     * Example values for Dutch, Portuguese and Russian: 'nl,pt,ru'
     * 
     * - Requires googleKeyFilename setting to be configured.
     * - Enable the Translate API on your Google Cloud account
     * - Languages to choose from: https://cloud.google.com/translate/docs/languages
     */
    static languages: string = process.env.IR_LANGUAGES || 'nl,de,pt,ru';

    /**
     * Language to translate from. Default value is 'en' - English
     */
    static sourceLanguage: string = process.env.IR_SOURCE_LANGUAGE || 'en';
}