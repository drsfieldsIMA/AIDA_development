import Image from "next/image";
import Link from "next/link";
const ProductFeed=({news}:{news:any}) => {
	const trash=news.posts;
console.log("product feed trash",trash)
return (
<div className='flow-flex-col'>
<ol className="product-feed">
    <li key={trash.title} className="product-feed-item">
        	{trash.title ? <div className="product-feed-top-arrow">
			<Image src="/greenarrows-2.svg" alt='recycle-sign' width={270} height={120} /></div> :"nothing"}
      	    <div className="product-feed-image__container">{trash?.photos ?
			<Image src={trash.photos[0]?.thumbnail} alt={trash.title} width={270} height={270} className="product-feed__image" />
			:"no-photo"}</div>
	   <Link
		key={trash.name}
		href={`/details/${parseInt(trash.post_id)}`}>
	     <a className="btn-tertiary"> Details </a>
		</Link>
	
	</li>
</ol>
</div>
)};

export default ProductFeed;