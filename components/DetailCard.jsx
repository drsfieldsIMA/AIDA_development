/** @format */
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./DetailCard.css";
import PropTypes from "prop-types";

function DetailCard({content,title,date,imageSrc}) {
	console.log(imageSrc);
	// console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(props.date));
	const splitString = date.split("T");
	console.log(splitString[0]);
	return (
		
		<Card className="detailCard" sx={{ width: 560, height:560, marginLeft:32 }}>
      <CardMedia
							component="img"
							height="200"
              src={imageSrc}
							alt={title}
							className="mediaCard"
						/>
			<CardContent>
				<Typography variant="h2" component="text.secondary">
					{title}
				</Typography>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Typography variant="body2" color="text.secondary">
					{splitString[0]}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="CardButton" size="large">Buy
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