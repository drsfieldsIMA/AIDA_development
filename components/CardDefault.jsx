/** @format */
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function CardDefault({props}) {
	const ImageSrc=props.Image;
	const foo = props.Image.formats.small ?? ImageSrc;
	const srcSet="http://localhost:1339"+foo.url;

//	console.log("ImageURL=", foo.url)
	return (
		<Card className="detailCard" sx={{ width: 310, height:400, marginLeft:0 }}>
			<CardContent>
			<div className="img-responsive img-thumbnail ratio-4-3" style={{backgroundImage:`url(${srcSet})`}}></div>
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
	props:PropTypes.arrayOf(PropTypes.string),
	assets: PropTypes.arrayOf(PropTypes.string),
	Image:PropTypes.arrayOf(PropTypes.string),
	Title:PropTypes.string.isRequired,
	content:PropTypes.string,
	ImageSrc:PropTypes.string,
	Price:PropTypes.string,
};

export default CardDefault;