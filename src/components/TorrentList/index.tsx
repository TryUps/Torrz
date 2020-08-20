import styled from 'styled-components';

const TorrentList = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, 10rem);
  width: 100vw;
  padding: 20px;
  justify-content: space-evenly;
`;

export default TorrentList;