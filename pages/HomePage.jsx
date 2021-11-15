/** @format */
import React from "react";
import Image from "next/image";
import SplashSection from "./Splash";
import PropTypes from "prop-types";

const HomePage = () => {
	return (
				<div className="row">
					<div className="col-md-6 col-lg-5">
							<div
								className="wrapper-image"
								style={{ height: 180, width: 180 }}
							>
								<Image
									src="/Aida_logo.svg"
									alt="Picture of the author"
									layout="responsive"
									width={180}
									height={180}
								/>
							</div>
							<SplashSection />
					</div>
					<div className="col-md-6 col-lg-7">
						<div className="wrapper-image-secondary">
							<Image
								src="/mob_splash.svg"
								alt="Picture of the author"
								width={500}
								height={750}
							/>
						</div>
					</div>
				</div>
	);
};

/* async function getStaticProps() {
	// get assets from our api
	const res = await fetch("http://localhost:1339/assets");
	const assets = await res.json();
	return {
		props: { assets },
	}
} */

HomePage.propTypes={
	title:PropTypes.string,
	content:PropTypes.string,
	imageSrc:PropTypes.string,
	date:PropTypes.string,
};

export default HomePage;
