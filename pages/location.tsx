
import Link from "next/link"
import Layout from "../comps/Layout"
import { useState } from "react"
import { string } from "yup";

interface Provider {
    coords:{
    longitude: string | null;
    latitude: string | null;
    }
  }

export default function Location() {

   const [usersLocation, setUsersLocation]=useState<string>('');
   const  [latitude, setUsersLatitude]=useState<string | number>('');
   const   [longitude, setUsersLongitude]=useState<string | number>('');  
   const [position,setPosition]=useState<Provider[]>([])
   

 /*   function getLocation() {
    
    if (navigator.geolocation) {
        console.log("navigator",navigator.geolocation)
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
function getCoordinates(position: { coords: { latitude: string; longitude: string; }; }): { 
     console.log("get coordinates",position)
     console.log(position.coords.latitude)
   setPosition([position.coords.latitude,position.coords.longitude])
  } */


  return (
    <div>
     <h1>location</h1>    
     <Link href="/">Index</Link>
     <button >
       Get coordinates
     </button>
     <h4>  
    HTML coordinates
     </h4>
     <p>Latitude:{latitude}</p>
     <p>Latitude:{longitude}
     </p>
     <h4> Google Maps reverse geocoding</h4>
    </div>
  )
}
