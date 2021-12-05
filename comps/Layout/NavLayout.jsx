import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Nav from  './Nav'
import { NavMob } from './NavMob';
import  {NavSidebar}  from './NavSidebar';
import { ThemeProvider } from '@mui/material/styles';
import  {theme} from '../../theme/theme';
import PropTypes from "prop-types";

const NavLayoutRoot = styled('div')(({ theme }) => ({
  display: 'inline-block',
  maxWidth: '100%',
  paddingTop: 0,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 0,
    paddingRight:0
  }
}));

export default  function NavbarLayout  (props) {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  return (
    < >
    <ThemeProvider theme={theme}>
     <NavLayoutRoot>
     <Box sx={{ maxWidth: '100%', display: { xs: 'block', md: 'none' }, m: 1 }}>
      <NavMob onSidebarOpen={() => setSidebarOpen(true)}/>
				<NavSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
			</Box>
			<Box sx={{maxWidth: '100%', display: { xs: 'none', md: 'block' }}}>
			<Nav/>
			</Box>
      </NavLayoutRoot>
      </ThemeProvider>
    </>

  );
}

NavbarLayout.propTypes = {
  onSidebarOpen: PropTypes.func,
  NavbarLayout: PropTypes.node
};