import React from 'react'
function Ads() {
 const randomAd=()=>{


 let base = `http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`
 let newAd = `http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`
 
  // make sur we dont run the same Ad twice in a row 
 while(base == newAd){
     base = `http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`
 } 
 return base
}
   
    return (
        <div className="container card m-2" >
            <p className="mt-3 mb-3">
            Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.

            But first, a word from our sponsors:
            </p>
            <img className="img col-md-6 col-sm-8 mb-3" src={randomAd()} 
            alt="test"/>
        </div>
    )
}

export default Ads
