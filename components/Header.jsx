import React, { useRef, useState } from 'react'
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  useTheme,
} from '@mui/material'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AccountCircle,
  History,
  Inbox,
  MusicNote,
  Notifications,
  People,
} from '@mui/icons-material'
import { ThemeContext } from '@emotion/react'

const Header = () => {
  const abar = useRef(null)
  const theme = useTheme()
  const [open, setOpen] = useState({
    drawer: false,
    notificationAnchor: null,
  })
  const toggleDrawer = () => {
    setOpen({ ...open, drawer: !open.drawer })
  }
  const openNotification = (e) => {
    setOpen({ ...open, notificationAnchor: e.currentTarget })
  }
  const closeNotification = () => {
    setOpen({ ...open, notificationAnchor: null })
  }

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ boxShadow: 1, zIndex: theme.zIndex.drawer + 1, pr: 2, pl: 3 }}
        ref={abar}
        color="primary"
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            OBs
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              flexGrow: 1,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            OBs
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
              href="/members/list"
            >
              メンバー
            </Button>
            <Button
              sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
              href="/bands/list"
            >
              バンド
            </Button>
            <Button
              sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
              href="/history"
            >
              歴史
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="outlined" color="inherit" href="/about">
              OB会について
            </Button>
            <IconButton
              color="inherit"
              sx={{ mx: 1 }}
              onClick={(e) => {
                setOpen({ ...open, notificationAnchor: e.currentTarget })
              }}
            >
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={open.notificationAnchor}
              open={Boolean(open.notificationAnchor)}
              onClose={closeNotification}
              PaperProps={{
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    transform: 'translateY(-50%) rotate(45deg)',
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>通知1</MenuItem>
            </Menu>
            <Tooltip title="My Page">
              <IconButton href="/mypage">
                <Avatar alt="me" src="https://picsum.photos/200" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open.drawer}
        onClose={toggleDrawer}
        PaperProps={{ sx: { width: '40%' } }}
      >
        <Box sx={{ height: abar.current?.clientHeight }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/members/list">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="メンバー" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/bands/list">
              <ListItemIcon>
                <MusicNote />
              </ListItemIcon>
              <ListItemText primary="バンド" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="/history">
              <ListItemIcon>
                <History />
              </ListItemIcon>
              <ListItemText primary="歴史" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Header
