import React from 'react'
import Card from "@mui/material/Card";
import Image from 'next/image';

const ReviewSection=() => {
    return (
<div className="rev-section">

<h2 className="title">Our Guests Love Us</h2>
<p className="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam possimus perferendis non error neque.</p>

<div className="reviews">

<div className="review">
   <div className="head-review">
      <Image src={"/images/avatar-1.jpg"} className="img" alt="avatar 1" width={250} height={250}/>
   </div>
   <div className="body-review">
      <div className="name-review">Nathan D.</div>
      <div className="place-review">Germany</div>
      <div className="rating">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half"></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>
<div className="review">
   <div className="head-review">
      <Image src={"/images/avatar-2.jpg"} className="img" alt="avatar 2" width={250} height={250}/>
   </div>
   <div className="body-review">
      <div className="name-review">Mary Will</div>
      <div className="place-review">Paris</div>
      <div className="rating">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>
<div className="review">
   <div className="head-review">
      <Image src={"/images/avatar-3.jpg"} className="img"  alt="avatar 3" width={250} height={250}/>
   </div>
   <div className="body-review">
      <div className="name-review">Kevin Tuck</div>
      <div className="place-review">New York</div>
      <div className="rating">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half"></i>
      </div>
      <div className="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.</div>
   </div>
</div>

</div>

</div>
);
}

export default ReviewSection;