/** @format */

import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h1 className='page-title'>
				<FaExclamationTriangle />
				404
			</h1>
			<h4>Sorry, Nothing is here </h4>
			<Link href='/'> Go back home</Link>
		</div>
	);
}
