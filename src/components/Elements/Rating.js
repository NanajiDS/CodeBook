import React from 'react'

const Rating = ({rating}) => {
     let RatingArray = Array(5).fill(false);
     for(let i =0;i<rating;i++)
     {
          RatingArray[i] = true;
     }
  return (
<>
    {RatingArray.map((value,index)=>(
        value?(<i key ={index}  className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>)
        :(  <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>) 
    ))}
</>
  )
}

export default Rating
