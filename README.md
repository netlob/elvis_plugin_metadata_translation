# elvis_plugin_metadata_translation

## Installation
The server can either be installed on the Elvis Server or on a separate machine.

* Clone or download this package.
* Open src/config.ts and configure the settings. You can either configure the settings in this config file or by setting environment variables.
* Install nodejs (6.9 or higher).
* Open a terminal and go to the package folder.
* Install TypeScript via npm: npm install -g typescript
* Install node modules: npm install
* Start the server: npm start
* The server is correctly started when a startup message is showed.

## Configure webhook
An Elvis webhook needs to be configured if you want to detect description updates directly when they are changed in Elvis. 

- Log-in to the Elvis web client as admin user.
- Go to the management console, webhooks section and add a new webhook.
- Name: For example, "Tag Translation".
- URL: Point it to the URL where the image recognition server is running, if it's running on the same machine as Elvis and you did not change the port number in `src/config.ts`, this will be: http://localhost:7080/.
- Event type: `asset_update_metadata`.
- Metadata to include: 
  ```
  description
  ```
- Asset event configuration:
  ```
   description
  ```
- Save the webhook.
- The generated secret token needs to be specified in the `src/config.ts` file later on.

Detailed information on setting up and using webhooks can be found on [Help Center](https://helpcenter.woodwing.com/hc/en-us/articles/115001884346).

An example webhook is:
https://media.discordapp.net/attachments/588451250123833382/694871519293210704/unknown.png

## Configure custom-assetinfo.xml
Some extra metadata fields have to be added in order for this plugin to work.
- Add the end of the "assetTypeBaseExt" tag in `/data/elvis/config/custom-assetinfo.xml` you will need to add 1 field for each language provied in `src/config.ts`.
- Example field for language `ru`:
  ```
  <field name="cf_descriptionRu" group="General">
      <storage storeInMetadata="true"/>
      <compass index="tokenized" analyzer="pureLowerCase" store="yes" excludeFromAll="false" />
      <data editable="true" datatype="text" multivalue="true" />
  </field>
  ```
- Make sure to
  - capitalize the first letter of the 2-letter language code
  - create a field for each language provided in the config file
