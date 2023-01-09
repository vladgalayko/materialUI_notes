import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Drewer from '@material-ui/core/Drawer'
import  Typography  from '@material-ui/core/Typography'
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import  ListItemIcon  from '@material-ui/core/ListItemIcon'
import  ListItemText  from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#f4f4f4'
  }
})

export default function Layout({children}) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary'/>,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color='secondary'/>,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drewer
        className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{paper: classes.drawerPaper}}>
        <div>
          <Typography variant='h5'>
            Ninja notes
          </Typography>
        </div>
          
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>

      </Drewer>

      <div className={classes.page}>
        {children}
      </div>
    </div>
  )
}