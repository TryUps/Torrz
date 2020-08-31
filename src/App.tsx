import React, { useState, useEffect } from 'react';
import TorrentList from './components/TorrentList';
import Torrent from './components/Torrent';
import { Header, Title, Nav, Main } from './components/Styles';
import Torrz from './utils/torrz';

const torrz = new Torrz();

/*torrz.add('magnet:?xt=urn:btih:0c0c6b111b394c028baf903ba27ac6279ecdb165&dn=%5bCOMANDOTORRENTS.ORG%5d%20Scooby!%20-%20O%20Filme%202020%20%5b1080p%5d%20%5bDUAL%5d&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=http%3a%2f%2fexodus.desync.com%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2780%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2730%2fannounce')
  .then(torrent => {
    console.info(torrent)
  })
  .catch(e => console.error(e))
*/
const App = () => {
  const [torrents, setTorrent] = useState([]);

  useEffect(() => {
    torrz.add('magnet:?xt=urn:btih:55369055ace62fef3eed3901aab8b473d28d03ed&dn=COMANDO.TO%20-%20Hoops%201%c2%aa%20temporada%20Completa%202020%20%5b1080p%5d&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker4.piratux.com%3a6969%2fannounce&tr=udp%3a%2f%2fcoppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.lanta-net.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=http%3a%2f%2fbt.careland.com.cn%3a6969%2fannounce&tr=http%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2fpublic.popcorn-tracker.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=http%3a%2f%2fexodus.desync.com%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2f9.rarbg.me%3a2780%2fannounce&tr=udp%3a%2f%2f9.rarbg.to%3a2730%2fannounce')
      .then((torrent: any) => {
        console.info(torrent)
      })
      .catch((e: string) => console.error(e))
  }, [])

  const addTorrent = () => false;
  return (
    <div className="App">
      <Header>
        <Title className="logo">Torrz</Title>
        <Nav></Nav>
      </Header>
      <Main>
        <TorrentList id="torrent-list">
          <Torrent onAdd={addTorrent} />
          {torrents}
        </TorrentList>

      </Main>
    </div>
  )
}

export default App;
