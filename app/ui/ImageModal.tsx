import { useState } from 'react';
import Image from 'next/image';

function ImageModal({ images }) {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const showModal = (image) => {
        setSelectedImage(image);
        setIsVisible(true);
    };

    const hideModal = () => {
        setIsVisible(false);
    };

    return (
        <div>
            <div>
               {images.map((image, index) => (
                   <img src={image} alt={`Image ${index}`} onClick={() => showModal(image)} />
               ))}
            </div>
        </div>
    );
}

export default ImageModal;
