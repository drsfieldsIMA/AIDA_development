/** @format */
import React from "react";
import { Link} from "react-router-dom";
import Image from "next/image";

function Nav() {

	return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<Link className="navbar-brand" to="/">
					<Image className="nav_img"
						width={72}
						height={72} 
						src="/Aida_logo.svg"
									alt="Aida logo"
						></Image>
					</Link>
                    <Link className="navbar-brand" to="/">
											AIDA
                      <span className="typewriter"> 人工知能欠陥の獲得 </span>
                    </Link>
                    
                   
                    <div className="navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
														<Link to="/" exact>Home</Link>
                            </li>
                            <li className="nav-item">
															<Link to="/products">Products</Link>
                             </li>
                            <li className="nav-item">
														<Link to="/about">About</Link>
                            </li>
														<li className="nav-item">
														<Link to="/login">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
	);
}

export default Nav;
