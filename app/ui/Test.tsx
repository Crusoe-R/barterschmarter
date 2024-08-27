"use client"
import { useState, useEffect } from 'react';
import styles from '@/app/ui/scollbar.module.css'
import Image from 'next/image';

   
export function Trade({showSelection, imgNum: imgNum, addLeft, addRight}: { showSelection: () => void, imgNum: number, addLeft: (numbL: number) => void, addRight: (numbR: number) => void}) {
    const [leftButtonImage, setleftButtonImage] = useState('/items/Image_0.png');
    const [rightButtonImage, setrightButtonImage] = useState('/items/Image_0.png');
    const [leftButtonPressed, setleftButtonPressed] = useState(false);
    const [rightButtonPressed, setrightButtonPressed] = useState(false);

    useEffect(() => {
        if (leftButtonPressed) {
            setleftButtonImage(`/items/Image_${imgNum}.png`);
            addLeft(imgNum);
            setleftButtonPressed(false);
        }
        if (rightButtonPressed) {
            setrightButtonImage(`/items/Image_${imgNum}.png`);
            addRight(imgNum);
            setrightButtonPressed(false);
        }
    }, [imgNum]);


    function buttonPressed(side: number) {
        showSelection();
        if (side === 1) {
            setleftButtonPressed(true);
        } else if (side === 2) {
            setrightButtonPressed(true);
        }
     }
     

    return (
        <div className="collapse-content flex justify-center ">
            <button onClick={() => buttonPressed(1)} className='btn btn-outline w-16 h-16 m-auto'>
                {<Image src={leftButtonImage} alt='' width={60} height={60} />}
            </button> 
            <i className='inline-block w-10 h-10 mt-3 p-0.5 border-t-2 border-r-2 border-white rotate-45'></i>
            <button onClick={() => buttonPressed(2)} className='btn btn-outline w-16 h-16 m-auto'>
                {<Image src={rightButtonImage} alt='' width={60} height={60} />}
            </button>  
        </div>
    )
    };

export default function Barter() {
    const [isSelectionVisible, setSelectionVisible] = useState(false);
    const [imgNum, setimgNum] = useState(0);


    const showSelection = () => {
        setSelectionVisible(true);
    };
    

    const hideSelection = (num: number) => {
        setimgNum(num);
        setSelectionVisible(false);
    };


    const collapses = [
        { title: 'Iliya Island', content: () => () => Trade({showSelection, imgNum: imgNum, addLeft: (numb) => addLeft(numb, 0), addRight: (numb) => addRight(numb, 0)}), leftImg: 0, rightImg: 0},
        { title: 'Balvege Island', content: () => () => Trade({showSelection, imgNum: imgNum, addLeft: (numb) => addLeft(numb, 1), addRight: (numb) => addRight(numb, 1)}), leftImg: 0, rightImg: 0},
        
    ];
    
    const addLeft = (numb: number, index: number) => {
        console.log('left side ', numb, ' from collapse ', index);
        collapses[index].leftImg = numb;
    }
    const addRight = (numb: number, index: number) => {
        console.log('Right side ', numb,  ' from collapse ', index);
        collapses[index].rightImg = numb;
        console.log(`Left Image: ${collapses[index].leftImg}`);
    }
 
    function testLog() {
        collapses.forEach((collapse, index) => {
            console.log(`Collapse ${index}:`);
            console.log(`Title: ${collapse.title}`);
            console.log(`Left Image: ${collapse.leftImg}`);
            console.log(`Right Image: ${collapse.rightImg}`);
        });
     }

    function generateImages(startValue: number, endValue: number) {
        const length = endValue - startValue + 1;
        return Array.from({ length }, (_, i) => (startValue + i));
       }
       
       // Usage
       const [images, setImages] = useState(generateImages(1, 75));

    return (
        
        <div className={`${styles['no-scrollbar']} col-span-2 w-calc(100% - 10px) m-5 h-alc(100% - 10px) border-2 rounded-md border-gray-700 overflow-auto relative`}>
            {isSelectionVisible && (
                <div className="absolute top-20 left-3 grid grid-cols-8 gap-2 p-2 float-left rounded-xl border-2 border-gray-400 bg-neutral-800 z-10">
                    {images.map((num, index) => (
                       <img className="border-2 border-gray-400 hover:border-amber-400 hover:bg-indigo-200 rounded-xl" src={`/items/Image_${num}.png`} alt={`Image ${index}`} onClick={() => hideSelection(num)} />
                    ))}
                </div>
)}
            {collapses.map((collapse, index) => (
                <div key={index} className="collapse collapse-arrow bg-base-200 w-full rounded">
                   <input type="checkbox" /> 
                   <div className="collapse-title text-xl font-medium">
                       {collapse.title}
                   </div>
                   {collapse.content()()}
                </div>
            ))}
            <button className='btn' onClick={testLog}></button>
        </div>
    );
 }