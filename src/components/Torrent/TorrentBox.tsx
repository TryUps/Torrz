import styled from 'styled-components';

export const TorrentBox = styled.button`
  display: flex;
  width: 10rem;
  height: 15rem;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);           
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: rgba(0,0, 0 ,0.6);
  }                        
`;

export const Label = styled.div`
  align-self: end;
`;
