"use client"
import styles from '@/app/ui/test.module.css';
import { useState } from 'react';

export default function FoldableDiv() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    
    <div className={styles.wrapcollapsible} onClick={() => setIsOpen(!isOpen)}>
    <input id={styles.collapsible} className={styles.toggle} type="checkbox" />
    <label htmlFor={styles.collapsible} className={styles.lbltoggle}>More Info</label>
    <div className={styles.collapsiblecontent}>
      <div className={styles.contentinner}>
        <p>Your content hereasdasdasdddddddddddddddddd...</p>   
      </div>
    </div>
    <div className='absolute left-40 border bg-white w-80 h-40'>
    <button className="relative bg-blue-500 text-white px-4 py-2">
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
   
 </div>
</button>
    </div>
   </div>
 );
}