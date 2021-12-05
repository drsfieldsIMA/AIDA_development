import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import  theme  from '../../theme/theme';
import { useRouter } from 'next/router';

export const NavMob = (props) =>  {
const router=useRouter()
  const { onSidebarOpen, ...other } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onSidebarOpen}
            sx={{
              display: {
                mr: 2,
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AIDA
          </Typography>
          <Button color="inherit" 
         sx={{backgroundColor:'neutral.800'}}
         hover={{backgroundColor:'neutral.600'}}
         onClick={() => router.push('/login')}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

NavMob.propTypes = {
  onSidebarOpen: PropTypes.func
};