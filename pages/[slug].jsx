/** @format */
import React from "react";
import PropTypes from "prop-types";
import assetArr from "./api/assetArr";
import { Card,Box, Divider} from '@mui/material';
import Text from "../comps/common/Text"
//import { API_URL } from "../utils/url";
import Header from "../comps/Layout/Header";

export default function productPost({ asset }) {
	const {Title,Content,Price,createdAt,Image} =asset;
	return (
		<>
		<Header></Header>
		<Box className="product-box height-75">
		<Card className="singleCard" style={{height:"75vh",marginBottom:"2em",marginTop:"1em"}}>
		<div className="row">
				<div className="col-sm-12 col-md-6">
				<div className="img-responsive img-thumbnail ratio-4-3" style={{background:`url(${Image.url}) 50% 50% no-repeat`, backgroundSize: "cover"}}></div>
				</div>
  <div className="col-sm-12 col-md-6">
  <h2>{Title}</h2>
  <Divider
          sx={{
            borderColor: '#00035a',
            my: 3
          }}
        />
      <Text color={'#00035a'} content={Content}></Text>
			<Text color={'#00035a'} content={Price}></Text>
			<Text color={'#00035a'} content={createdAt}></Text>
  </div>
  </div>
  </Card>
  </Box>
	</>
	);
}

export async function getStaticPaths() {
	/* const res = await fetch(`http://localhost:1337/assets`);
	const assets = await res.json(); */
	const assets=assetArr;
	const paths = assets.map((post) =>
		({
			params: { slug: post.Slug },
		})
	);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
//	const res = await fetch(`http://localhost:1337/assets?Slug=${slug}`);
//	const data = await res.json();
//	const  asset =  assetArr.filter(post => (post.Slug == slug));
const ith= assetArr.findIndex(x => x.Slug === slug);
   
const asset=assetArr[ith]
	return {
		props: { asset },
	};
}

productPost.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string),
	asset:PropTypes.arrayOf(PropTypes.string),
	Title: PropTypes.string,
};
