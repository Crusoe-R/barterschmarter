"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/ui/scollbar.module.css'


interface ItemProps {
 imagePath: string;
}

export function Item({ imagePath }: ItemProps) {
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false)

  const handleMouseEnter = () => {
    setShowButton(true);
   };
  
   const handleMouseLeave = () => {
    setShowButton(false);
   };
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
 return (
 <div className='border-2 rounded-md border-gray-700 p-2 relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      
      {showButton && (<button className="absolute top-0 right-0 btn btn-xs btn-square btn-outline btn-error">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7l10 10" />
        </svg>
    </button>
      )}
   <Image
           src={imagePath}
           alt=''
           width={500} // replace with your image's width
           height={300} // replace with your image's height
           className="dynamic-width"
         />
    <div className={`${imagePath === '/items/Image_0.png' ? 'invisible' : ''}`}>
    <p className='text-sm'>Count: <br /> {count}</p>
      <div className='flex justify-center'>
      <button className='btn btn-sm btn-outline' onClick={increment}>
        <i className='inline-block p-0.5 border-t-2 border-r-2 border-white -rotate-45'></i>
      </button>
      <button className='btn btn-sm btn-outline' onClick={decrement}>
      <i className='inline-block p-0.5 border-b-2 border-r-2 border-white rotate-45'></i>
      </button>
      </div>
   </div>
 </div>
 );
}


interface RowProps {
    count: number;
   }
   
   export  function Row({ count }: RowProps) {
    const items = Array.from({ length: 8 }, (_, i) => (
      <Item key={i} imagePath={`/items/Image_${(count + i) <= 75 ? count + i : 0}.png`} />
    ));
   
    return (
      <div className='grid grid-cols-8 gap-2 p-2'>
        {items}
      </div>
    );
   }

   export default function inventory() {

    const test = () => {
        console.log("showSelection function called");
    };
   
    return (
        <div className='w-full h-[calc(100vh-3rem)] flex flex-col'>
            <div className={`${styles['no-scrollbar']} w-full overflow-auto border-2 rounded-md border-gray-700`}>
              <Row count={1}/>
              <Row count={9} />
              <Row count={17} />
              <Row count={25} />
              <Row count={33} />
              <Row count={41} />
              <Row count={49} />
              <Row count={57} />
              <Row count={65} />
              <Row count={73} />
          </div>
          <div className="w-full items-center flex justify-center p-3">
              <button className="btn btn-outline btn-wide" onClick={test}>Clear All</button>
          </div>
        </div>
    );
   }
 

 