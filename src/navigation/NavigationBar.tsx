import { List, ListItem, ListItemIcon, Drawer, Toolbar} from '@material-ui/core'
import { createStyles, Theme, makeStyles} from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'
import React, {FC, useState} from 'react'


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

type NavProps = {
    drawerOpen: boolean,
}

export const NavigationBar: FC<NavProps> = ({drawerOpen}: NavProps) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Drawer className={classes.drawer} variant='persistent' anchor='left' open={drawerOpen} classes={{paper: classes.drawerPaper}} color='secondary'>
            <div className={classes.drawerContainer}>
                <Toolbar />
            <List>
                <ListItem>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
            </div>
        </Drawer>
        </div>
    )

}