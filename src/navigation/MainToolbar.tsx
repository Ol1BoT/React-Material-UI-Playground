import React, {FunctionComponent} from 'react'
import {AppBar, IconButton, Typography, Toolbar, Button} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';


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

const classes = useStyles()

    return (
      <div className={classes.root}>

        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
      </div>
    )
}