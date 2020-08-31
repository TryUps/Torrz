const remote = window.require('electron').remote
const app = remote.app
const path = window.require('path')
const WebTorrent = window.require('webtorrent')

export default class Torrz {
  client: any;
  state: { torrSuccess: boolean; torrent: []; error: any; };

  constructor() {
    this.state = {
      torrSuccess: false,
      torrent: [],
      error: null
    };

    this.client = new WebTorrent({
      client: 'Torrz Torrents'
    })


    this.client.on('error', function (err: any) {
      console.error('ERROR: ' + err.message);
    })

    this.resumeTorrents()
  }

  async add(magnet: string, options: [] = []) {
    return new Promise((resolve, reject) => {
      let torrent: any = null;
      let ready: boolean = false;

      torrent = this.client.get(magnet) === null ? null : torrent;

      const apppath = path.join(app.getPath('downloads'), '/Torrz/')

      const addTorrent = (magnet: string) => this.client.add(magnet, {
        path: apppath
      }, this.onTorrent)

      if (torrent === null) {
        torrent = addTorrent(magnet);
      }

      let infoHash = this.client.get(magnet).infoHash === torrent.infoHash

      if (!infoHash) {
        reject('Torrent Error, no infoHash encountered!')
        return false;
      }

      torrent.on('ready', () => {
        ready = torrent.ready

        console.log(ready)
        if (ready === true) {
          console.log(ready)
          resolve(torrent)
        } else {
          reject('torrent falied')
        }
      })

    })
  }

  async remove(torrent: string) {
    return new Promise((resolve, reject) => {
      if (torrent) {
        return resolve(torrent)
      } else {
        return reject(new Error('Unable to catch torrent id.'))
      }
    })
  }

  onTorrent(torrent: any) {
    console.log(torrent.name);

    const interval = setInterval(() => console.log((torrent.progress * 100).toFixed(1)), 1000);

    torrent.on('wire', (wire: any, addr: any) => {
      console.log('connected to peer with address ' + addr)
    })
  }

  async resumeTorrents() {
    return new Promise((resolve, reject) => {
      return resolve('Torrents are resumed with sucess');
    })
  }

  alreadyAdded(magnet: string) {
    return magnet;
  }
}