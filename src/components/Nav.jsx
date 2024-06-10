import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Avatar, Button, Container, Menu, MenuItem, Tooltip } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const drawerWidth = 240;

const Main= styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // ...(open && {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: `${drawerWidth}px`,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const DrawerHeader = styled('article')(({ theme }) => ({
  display: 'block',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'space-around',
}));

export default function Nav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
   
   

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <AppBar position="fixed" open={open}>
      <Container maxWidth="xl">
        <Toolbar>
        <IconButton
    size="medium"
    edge="start"
    color="inherit"
    aria-label="open drawer"
    sx={{ mr: 4 }}
    component={Link}
    
    to="/"
  >
    <HomeIcon/>
  </IconButton><br></br><br></br><br></br><br></br>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 5, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="feFuncA" style={{marginLeft:'300px'}}>
          ROYAL CHEFF
          </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='contained' color='success'  style={{marginLeft:'500px'}}component={Link} to='/Login'>
            Login
          </Button>&nbsp;&nbsp;
          <Button variant='contained' color='error' component={Link} to='/Signup'>
            Signup
          </Button>&nbsp;&nbsp;
         
          <Box sx={{ flexGrow: 0 }}  style ={{marginLeft:"60px"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography  sx={{textDecoration:'none'}}textAlign="center" component={Link} to={
                    setting=== 'profile' ? '/UserProfile':
                    setting=== 'Account' ? '':
                    setting=== 'Feedback' ? '/Feedback':
                    setting=== 'Logout' ? '/':  '#'}>
                    
                    {setting}  
                    
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>




        </Toolbar>
        </Container>
      </AppBar>
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === '<' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Today Offer', 'Special Offer', 'Today special Menu', 'Category'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            // </ListItem>
          ))} */}
        </List>

        <div>
        <Link to='/Tdsp'style={{textDecoration:"none",color:"black", marginLeft:'-100px'}}>Today Offer</Link><br></br><br></br>
        <Link to='/Sp'style={{textDecoration:"none",color:"black", marginLeft:'-89px'}}>Special Offer</Link><br></br><br></br>
        <Link to='/Detalis'style={{textDecoration:"none",color:"black", marginLeft:'-105px'}}>Add Detalis</Link><br></br><br></br>
        <Link to='/Ud'style={{textDecoration:"none",color:"black", marginLeft:'-89px'}}>Update Detalis</Link><br></br>

                
</div>





        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>
  

  );
}
