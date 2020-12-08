import './style.css';
import React, { Fragment } from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme, withStyles  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
      position: 'absolute',
      zIndex: '2',
      backgroundColor: '#258C60',
      margin: '0 auto',
      top: '8px',
    // marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100%',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // width: theme.spacing(7) + 1,
    width: '58px',
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const GlobalCss = withStyles({
    '@global': {
        '.MuiDrawer-paper': {
            position: 'relative',
            zIndex: '0',
        },
    },

})(() => null);

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
        <aside className="layout__control-panel control-panel">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: open,
                })}
            >
                <MenuIcon />
            </IconButton>
            <GlobalCss />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                  <IconButton className={clsx({
                      [classes.hide]: !open,
                      })} onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  {['Night mode', 'Settings', 'Help', 'Exit'].map((text, index) => (
                      <ListItem button key={text} disabled>                          
                        <ListItemIcon>
                          {
                            [<NightsStayIcon fontSize="small"/>, 
                            <SettingsIcon fontSize="small"/>, 
                            <HelpOutlineIcon fontSize="small"/>, 
                            <ExitToAppIcon fontSize="small"/>][index]
                          }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                  ))}
                </List>
            </Drawer>
        </aside>
    </Fragment>
  );
}