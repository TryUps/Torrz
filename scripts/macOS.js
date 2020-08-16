const builder = require("electron-builder");
const Platform = builder.Platform;

builder.build({
  targets: Platform.MAC.createTarget(),
  config: {
    "appId": "ml.tryups.torrz",
    "productName": "Torrz",
    "mac": {
      "category": "public.app-category.torrents"
    }
  }
}).then(() => console.log('Finished Build!'))
  .catch(e => console.log(e))
