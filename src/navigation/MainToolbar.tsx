import React, {FunctionComponent, useState} from 'react'
import {AppBar, IconButton, Typography, Toolbar, Button} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';

import {NavigationBar} from './NavigationBar'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
    },
  }),
)

export const ApplicationBar: FunctionComponent<any> = () => {

  const [drawerOpen, setDrawerOpen] = useState(true)

  const drawerStatus = () => {
    console.log("Drawer",drawerOpen)
    setDrawerOpen(!drawerOpen)
  }

const classes = useStyles()

    return (
      <div className={classes.root}>

        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={drawerStatus}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
        <NavigationBar drawerOpen={drawerOpen}></NavigationBar>
      </div>
    )
}