import React from 'react'

const about = () => {
const arr=[1,2,3,4,5];
arr[7]=7;//1,2,3,4,5,6,0,7 - > 8

console.log(arr[6]);

    
  return (
    <div className='bg-gray-700 h-screen w-screen text-8xl '>
      
   
   
     {arr[6]}
  
        </div>
  )
}

export default about