const builder = require("electron-builder");
const Platform = builder.Platform;

builder.build({
  targets: Platform.MAC.createTarget(),
  config: {
    "appId": "ml.tryups.torrz",
    "productName": "Torrz",
    "copyright": "Copyright © 2020 TryUps Company. All rights reserved.",
    "compression": "maximum",
    "asar": true,
    "mac": {
      "category": "public.app-category.torrents"
    },
    "fileAssociations": [{
      "ext": ["torrent"],
      "name": "Torrent",
      "description": "Open Torrent Files.",
      "role": "None"
    }]
  }
}).then(() => console.log('Finished Build!'))
  .catch(e => console.log(e))
