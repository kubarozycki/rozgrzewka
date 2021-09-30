import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutView from '../views/about';
import { useHistory } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import CalendarView from '../views/calendar';
import PricingView from '../views/pricing';
import ContactView from '../views/contact';


const routes = [
  { title: 'O nas', relativePath: '/o-nas', icon: 'home_outlined_icon', component: <AboutView /> }, //mapka?
  { title: 'Grafik', relativePath: '/grafik', icon: 'event_available_icon', component: <CalendarView /> },
  { title: 'Cennik', relativePath: '/cennik', icon: 'local_offer_icon', component: <PricingView /> },
  { title: 'Kontakt', relativePath: '/kontakt', icon: 'phone_icon', component: <ContactView /> },
  { relativePath: '/', component: <AboutView /> },
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function DrawerBody() {
    const history = useHistory();
    const location = useLocation();
    const activeRoute = routes.find(x => x.relativePath === location.pathname);
    console.log(activeRoute);

    return (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {
            routes.map(route => {

              const isActiveRoute = routes.some(x => x.component.type === activeRoute.component.type && x.title === route.title);

              return (
                route.title && <ListItem
                  button key={route.relativePath}
                  onClick={() => history.push(route.relativePath)}
                  selected={isActiveRoute}>
                  <ListItemIcon >
                    <Icon style={{color: theme.palette.primary.main}}>
                      {route.icon}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItem>
              )
            })}
        </List>
      </div >
    );

  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
              <img src='/logos/rozgrzewka_BIALE.png' alt='Rozgrzewka' style={{maxHeight:'50px'}}/>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">

            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >

              <DrawerBody />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <DrawerBody />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>

            <Switch>
              {routes.map(view => {
                return (<Route path={view.relativePath}>
                  {view.component}
                </Route>)
              })}
              
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
