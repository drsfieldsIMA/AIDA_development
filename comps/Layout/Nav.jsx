/** @format */
import React from "react";
import Link from "next/link"
import Image from "next/image";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../../public/icons/chart-bar';
import { Cog as CogIcon } from '../../public/icons/cog';
import { Lock as LockIcon } from '../../public/icons/lock';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { createMemoryHistory } from 'history';
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';


const Nav=(props)=> {
	const [auth, setAuth] = useContext(AuthContext);
	const router = useRouter();
	const history = useHistory();
   
	const { onSidebarOpen, ...other } = props;

	function logout() {
		setAuth(null);
		router.push("/");
	}

	return (
		<AppBar position="static">
        <Toolbar>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" href="/" passHref><a><Image className="nav_img"
						width={72}
						height={72} 
						src="/Aida_logo.svg"
									alt="Aida logo"
						></Image></a></Link>
						<Link className="navbar-brand" href="/">
											AIDA
                    </Link>
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
           
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02 ">
    <ul className="navbar-nav">
      <li className={router.asPath == "/" ? "active nav-item" : "nav-item"}> 
			<Link className="nav-item active"  href="/">
					<a>
						Home
															</a>
			</Link>
      </li>
      <li className="nav-item">
			<Link className="nav-item"  href="/products">
					<a>
						Products
															</a>
			</Link>
      </li>
			<li className="nav-item">
			<Link className="nav-item"  href="/about">
					<a>
						About
															</a>
			</Link>
      </li>
			{auth ? (
					<>
						<li className="nav-item"> <Link href="/admin"><a>Dashboard</a></Link></li> <button className="logout-btn" onClick={logout}><a>Log out</a></button>
					</>
				) : (
						<Link href="/login"><a>Login</a></Link>
					)}
    </ul>
  </div>
</nav>
</Toolbar>
</AppBar>
	);
}


Nav.propTypes = {
  onSidebarOpen: PropTypes.func
};

export default Nav;