import React from 'react';

interface Props {
  magnet?: string;
  name?: string;
  size?: number;
}

const Torrent: React.FC<Props> = ({ magnet, name, size }) => {
  return (
    <div className="torrent">
      <img src="" alt="" className="torrentImage" />
      <span>Torrent Title</span>
    </div>
  );
}

export default Torrent;