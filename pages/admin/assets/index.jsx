/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import Link from "next/link"
import Heading from '../../../comps/common/Heading'
import PropTypes from "prop-types";
import assetArr from '../../api/assetArr';
import CardDefault from '../../../comps/CardDefault';

export  async function getStaticProps() {
  //const res  = await fetch(`http://localhost:1337/assets`);
  //const data = await res.json();
   const data=assetArr
  return {
    props: { data },
  };
}

function AdminAssetsPage(data) {
  const assets=data.data
  return (
    <div>
      <Heading content="assets go here"/>
      	<main className="row product-container admin-bg">
         {assets &&
		 			assets.map((post) => (
		 				<div className="col-md-6 col-lg-4" key={post.Slug}>
		 				<Link href={`/${post.Slug}`}passHref  key={post.Slug}>
		 				<CardDefault props={post} key={post.Slug} />
		 	    </Link>
		 			 </div>
		 			))}			
		 </main>
    </div>
  )



}


AdminAssetsPage.propTypes = {
  props:PropTypes.node,
	assets: PropTypes.node,
	asset:PropTypes.node,
	Title: PropTypes.string,
};

export default AdminAssetsPage
