import React, { useState, useEffect, useMemo } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = useMemo(() => [
    { id: 'about', label: '关于我' },
    { id: 'education', label: '教育背景' },
    { id: 'experience', label: '实习经历' },
    { id: 'projects', label: '项目经历' },
    { id: 'skills', label: '专业技能' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // If we're at the top of the page, set hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        黄泓晋
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ width: '100%' }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  textAlign: 'center',
                  py: 1,
                  color: activeSection === item.id ? 'primary.main' : 'text.primary'
                }} 
              />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="default" 
          elevation={0}
          sx={{ 
            backdropFilter: 'blur(20px)',
            backgroundColor: darkMode 
              ? 'rgba(18, 18, 18, 0.8)' 
              : 'rgba(255, 255, 255, 0.8)',
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 700,
                  letterSpacing: '.05rem',
                  color: 'primary.main'
                }}
              >
                <ScrollLink
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                >
                  黄泓晋
                </ScrollLink>
              </Typography>

              {isMobile ? (
                <>
                  <IconButton
                    color="inherit"
                    aria-label="toggle dark mode"
                    onClick={toggleDarkMode}
                    edge="start"
                    sx={{ mr: 2 }}
                  >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <ScrollLink
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <Button 
                        sx={{ 
                          mx: 1,
                          color: activeSection === item.id ? 'primary.main' : 'text.primary',
                          fontWeight: activeSection === item.id ? 600 : 400,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'primary.main',
                          }
                        }}
                      >
                        {item.label}
                      </Button>
                    </ScrollLink>
                  ))}
                  <IconButton
                    color="inherit"
                    aria-label="toggle dark mode"
                    onClick={toggleDarkMode}
                    sx={{ ml: 2 }}
                  >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 