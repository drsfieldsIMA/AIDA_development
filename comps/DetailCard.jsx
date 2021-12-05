/** @format */
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function DetailCard({...props}) {
	// console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(props.date));
	const splitString = props.date.split("T");
	const ImageSrc=props.Image;
//	console.log("Detail image",ImageSrc);
	const srcSet=!props.Image  ? "/calender.svg" :props.Image ;
	return (
		
		<Card className="detailCard homeSkew" sx={{ width: 460, height:460, marginLeft:2 }}>
      <CardMedia
							component="img"
							height="200"
              src={srcSet}
							alt={props.title}
							className="mediaCard"
						/>
			<CardContent>
				<Typography color="text.secondary"  sx={{fontSize:"1.5rem",fontFamily:"adelle"}}   >
					{props.title}
				</Typography>
        <div dangerouslySetInnerHTML={{ __html:splitString[0] }} />
        <Typography  color="text.secondary"  sx={{fontSize:"0.75rem",fontFamily:"Fira Condensed Sans"}}>
					{props.content}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="CardButton mt-auto" size="large">Buy
				</Button>
			</CardActions>
		</Card>
	);
}

DetailCard.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string,
	imageSrc:PropTypes.string,
	date:PropTypes.string,
};

export default DetailCard;