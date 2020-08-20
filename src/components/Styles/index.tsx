import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 90px;
  background: rgba(0,0,0,.6);
  border-bottom: 1px solid rgba(0,0,0,.3);
  padding: 0 20px;
  z-index:10;
  -webkit-app-region: drag;
`;

const Title = styled.h1`
  min-width: 250px;
`;

const Nav = styled.nav`
  min-width: 300px;
  min-height: 50px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
`;

const Main = styled.main`
  display: flex;
  height: calc(100vh - 90px);
  z-index: 10;
  background-color: rgba(0,0,0,.4);
  overflow-y: auto;
`;

export { Header, Title, Nav, Main };