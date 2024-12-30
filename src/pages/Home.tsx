import React, { useState } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, InputBase, Drawer, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Layout>
      {/* Sidebar */}
      <Sidebar variant="temporary" open={sidebarOpen} onClose={toggleSidebar}>
        <List>
          <StyledListItem component={Link} to="/conteudos">
            <ListItemText primary="Conteúdos" />
          </StyledListItem>
          <StyledListItem component={Link} to="/ranking">
            <ListItemText primary="Ranking" />
          </StyledListItem>
          <StyledListItem component={Link} to="/certificados">
            <ListItemText primary="Certificados" />
          </StyledListItem>
          <StyledListItem component={Link} to="/perfil">
            <ListItemText primary="Perfil" />
          </StyledListItem>
          <StyledListItem component={Link} to="/minha-conta">
            <ListItemText primary="Minha conta" />
          </StyledListItem>
          <StyledListItem component={Link} to="/atendimento">
            <ListItemText primary="Atendimento" />
          </StyledListItem>
        </List>
      </Sidebar>

      {/* Conteúdo Principal */}
      <Main>
        {/* Barra Superior */}
        <AppBar position="static" color="default" sx={{ backgroundColor: '#1e1e1e' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
              <MenuIcon />
            </IconButton>
            <SearchContainer>
              <SearchIcon />
              <InputBase placeholder="Pesquisar..." />
            </SearchContainer>
            <IconButton sx={{ color: 'goldenrod' }}>
                  <NotificationsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Conteúdo */}
        <Content>
          <SectionTitle>Acesso</SectionTitle>
          <CardContainer>
            <CustomCard>
              <CardContent>
                <h3>Curso de Guitarra - Módulo 1</h3>
                <p>Aprenda a tocar guitarra do zero desde os conceitos essenciais.</p>
              </CardContent>
            </CustomCard>
            <CustomCard>
              <CardContent>
                <h3>Comunidade da Legião TDI</h3>
                <p>Participe da comunidade de hackers e compartilhe conhecimentos.</p>
              </CardContent>
            </CustomCard>
          </CardContainer>
        </Content>
      </Main>
    </Layout>
  );
};
export default HomePage;

/* Styled-Components */
const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
  overflow-x: hidden;
  font-family: 'Caviar Dreams', sans-serif;
`;

const Sidebar = styled(Drawer)`
  & .MuiDrawer-paper {
    width: 240px;
    background-color: #1e1e1e;
    color: #fff;
    font-family: 'Caviar Dreams', sans-serif;
  }
`;

const StyledListItem = styled(ListItem)`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Caviar Dreams', sans-serif;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
    
    .MuiListItemText-primary {
      color: #00ff00;
      font-weight: bold;
    }
  }
  
  .MuiListItemText-primary {
    color: #fff;
    transition: color 0.3s ease;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Caviar Dreams', sans-serif;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
  padding: 0 10px;
  margin-left: 20px;
  flex-grow: 1;
  font-family: 'Caviar Dreams', sans-serif;

  input {
    color: #fff;
    margin-left: 10px;
    width: 100%;
    font-family: 'Caviar Dreams', sans-serif;
  }
`;

const Content = styled.div`
  padding: 20px;
  flex-grow: 1;
  font-family: 'Caviar Dreams', sans-serif;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Caviar Dreams', sans-serif;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  font-family: 'Caviar Dreams', sans-serif;
`;

const CustomCard = styled(Card)`
  width: 300px;
  height: 150px;
  background-color: #1e1e1e;
  color: #fff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  font-family: 'Caviar Dreams', sans-serif;

  &:hover {
    transform: scale(1.09);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0 0 10px;
    font-family: 'Caviar Dreams', sans-serif;
  }

  p {
    font-size: 0.9rem;
    color: #bbb;
    font-family: 'Caviar Dreams', sans-serif;
  }
`;