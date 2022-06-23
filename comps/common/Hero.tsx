/** @format */

import Typography from "@mui/material/Typography";

const Hero = ({
	title,
	imageSrc,
	bgColor,
	bgSize,
}: {
	title: string;
	imageSrc: string;
	bgColor: string;
	bgSize: string;
}) => {
	return (
		<div
			className='hero'
			style={{
				backgroundImage: `url("${imageSrc}")`,
				backgroundPosition: `no-repeat center center`,
				backgroundRepeat: `none`,
				backgroundSize: `${bgSize}`,
			}}></div>
	);
};
export default Hero;
