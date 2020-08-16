import WebTorrent from 'webtorrent';

const onTorrent = (torrent: any) => {
  const client = new WebTorrent();

  client.on('error', (err) => {
    console.error('FATAL ERROR: ' + err);
  })

  let progress = setInterval( () => {
    var torrentProgress = (torrent.progress * 100).toFixed(1);
    var speed = (torrent.downloadSpeed / 1024).toFixed(2) + " KB/s"
  }, 1000)

  torrent.on('done', () => {
    clearInterval(progress)
  })

  torrent.on('error', (err: any) => {
    console.error(err)
    clearInterval(progress)
  });
}

export default onTorrent;