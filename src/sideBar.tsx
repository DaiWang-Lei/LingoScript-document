import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Panel from './panel'

const drawerWidth = 240;

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: 'flex',
//     },
//     drawer: {
//       [theme.breakpoints.up('sm')]: {
//         width: drawerWidth,
//         flexShrink: 0,
//       },
//     },
//     appBar: {
//       [theme.breakpoints.up('sm')]: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//       },
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       [theme.breakpoints.up('sm')]: {
//         display: 'none',
//       },
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//     },
//   }),
// );

interface ResponsiveDrawerProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: any;
}

export default function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  // const { container } = props;
  // const classes = useStyles();
  // const theme = useTheme();
  // const [mobileOpen, setMobileOpen] = React.useState(false);

 



  return (
          <div className='bg-local'>
            <Panel/>
          </div>


  );
}
