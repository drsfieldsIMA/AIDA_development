import PropTypes from "prop-types";
import Heading from "../../comps/common/Heading";
import Link from "next/link"
import AdminAssetsPage from "./assets";
import { useState, useContext } from "react";
import AuthContext from "../../comps/context/AuthContext";
import assetArr from "../api/assetArr";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminPage({ children }) {
	const [auth, setAuth] = useContext(AuthContext);
	const router = useRouter()
	useEffect(() => {
    if ((auth==null)) {
      router.push('/login')
    }
  }
	)
	const assets=assetArr
	return (
		<>

{auth ? (
				<>
				<h1 className="whiteText"> Welcome back  - {auth.user.username}   </h1>
<h2 className="whiteText"> Last logged in  -  {auth.user.updatedAt} </h2>
				</>
			) : (
				<Heading content="Admin Page" />
			)}
			<nav className="dashboard">
			Sections: <Link href="/admin/assets"><a>Manage your assets </a></Link>
		</nav>
    <Heading size="3" content="Assets" />
		<div>
      <ul className="whiteText">
	{assets && assets.map((post) => (
			<a key={post.Slug} className="single-asset">	<h3 key={post.Slug}>{post.Slug}</h3> </a>
  ))} 
		</ul>
    </div>
		</>
	)
}

AdminPage.propTypes = {
	children: PropTypes.node,
};