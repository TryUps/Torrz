import React from 'react';
import { TorrentBox, Label } from './TorrentBox';

interface Props {
  magnet?: string;
  name?: string;
  size?: number;
  onAdd?: any;
}

const Torrent: React.FC<Props> = ({ magnet, name, size, onAdd }) => {
  return (
    <TorrentBox className="torrent" onClick={onAdd}>
      <img src="" alt="" className="torrentImage" />
      <Label>Torrent Title</Label>
    </TorrentBox>
  );
}

export default Torrent;