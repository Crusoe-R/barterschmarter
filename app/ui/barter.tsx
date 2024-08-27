"use client"
import { useState, useEffect } from 'react';
import styles from '@/app/ui/scollbar.module.css'
import Image from 'next/image';

   
export function Trade({showSelection, buttonImage}: { showSelection: () => void, buttonImage: string  }) {
    const [leftButtonImage, setleftButtonImage] = useState('/items/Image_0.png');
    const [rightButtonImage, setrightButtonImage] = useState('/items/Image_0.png');
    const [leftButtonPressed, setleftButtonPressed] = useState(false);
    const [rightButtonPressed, setrightButtonPressed] = useState(false);

    useEffect(() => {
        if (leftButtonPressed) {
            setleftButtonImage(buttonImage);
            setleftButtonPressed(false);
        }
        if (rightButtonPressed) {
            setrightButtonImage(buttonImage);
            setrightButtonPressed(false);
        }
    }, [buttonImage]);


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
    const [buttonImage, setbuttonImage] = useState('/items/Image_0.png');


    const showSelection = () => {

        setSelectionVisible(true);
    };
    const hideSelection = (image: string) => {
        setbuttonImage(image);
        setSelectionVisible(false);
    };


    const collapses = [
        { title: 'Iliya Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Balvege Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Duch Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Eveto Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Luivano Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Mariveno Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Ephde Rune Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Baremi Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Weita Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Paratama Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Kancera Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Arakil Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Tatamura Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Ostra Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Deilinghart Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Racid Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Al-Naha Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Ajir Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Narvo Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Staren Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Netnume Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Dunde Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Barater Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Ginburrey Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Esfah Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Modric Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Shirna Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Teyamal Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Hakoven Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Padix Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Teste Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Tinberra Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Lerao Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Portanen Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Shasha Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Rosevan Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Sokota Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Tigris Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Halmad Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Kashuma Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Orisha Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Boa Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Derko Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
        { title: 'Riyed Island', content: () => () => Trade({showSelection, buttonImage})},
    ];
 
    function generateImages(startValue: number, endValue: number) {
        const length = endValue - startValue + 1;
        return Array.from({ length }, (_, i) => `/items/Image_${startValue + i}.png`);
       }
       
       // Usage
       const [images, setImages] = useState(generateImages(1, 75));

    return (
        
        <div className={`${styles['no-scrollbar']} col-span-2 w-calc(100% - 10px) m-5 h-alc(100% - 10px) border-2 rounded-md border-gray-700 overflow-auto relative`}>
            {isSelectionVisible && (
                <div className="absolute top-20 left-3 grid grid-cols-8 gap-2 p-2 float-left rounded-xl border-2 border-gray-400 bg-neutral-800 z-10">
                    {images.map((image, index) => (
                       <img className="border-2 border-gray-400 hover:border-amber-400 hover:bg-indigo-200 rounded-xl" src={image} alt={`Image ${index}`} onClick={() => hideSelection(image)} />
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
        </div>
    );
 }