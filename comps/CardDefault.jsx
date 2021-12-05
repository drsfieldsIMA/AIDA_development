/** @format */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { API_URL } from "../utils/url";
import { AltRouteRounded } from "@mui/icons-material";

function CardDefault({props}) {
	const ImageSrc=props.Image;
	const router = useRouter();
	const { asPath, pathname } = useRouter();
	const strFine =pathname.substring(pathname.lastIndexOf('/'));
//	console.log(strFine);
  const nameOfClass =  strFine == '/products' ? 'product-card': 'home-card'; 
	const	srcSet=!props.Image  ? "/Aida_logo.svg" :props.Image.formats.thumbnail.url ;
	//console.log("card");
	//console.log("URL card",API_URL+ foo);
  
//	console.log("ImageURL=", foo.url)
	return (
		<Card className={nameOfClass} sx={{ width: 310, height:400, marginLeft:0 }}>
			<CardContent>
			<div className="img-responsive img-thumbnail ratio-4-3" style={{background:`url(${srcSet}) 50% 50% no-repeat`, backgroundSize: "cover"}}></div>
			<Typography variant="body2" color="text.primary" style={{ fontSize: 28, fontWeight: "bold"}}>
          {props.Title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
          {props.Price.toFixed(2)}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="CardButton" size="large"> Buy
				</Button>
			</CardActions>
		</Card>
	);
}

CardDefault.propTypes={
	props:PropTypes.node,
	assets: PropTypes.node,
	Image:PropTypes.arrayOf(PropTypes.string),
	Title:PropTypes.string.isRequired,
	content:PropTypes.string,
	ImageSrc:PropTypes.string,
	Price:PropTypes.string,
	srcSet:PropTypes.string
};

export default CardDefault;