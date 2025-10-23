import React, { useState } from 'react';

// --- Image Imports (Ensures correct paths during deployment) ---
// regular packages 
import regular1 from "../../../../public/Packages-regular/01.jpg"
import regular2 from "../../../../public/Packages-regular/02.jpg"
import regular3 from "../../../../public/Packages-regular/03.jpg"
import regular4 from "../../../../public/Packages-regular/04.jpg"

// premium packages
import premium1 from "../../../../public/Packages Premium/01.jpg"
import premium2 from "../../../../public/Packages Premium/02.jpg"
import premium3 from "../../../../public/Packages Premium/03.jpg"
import premium4 from "../../../../public/Packages Premium/04.jpg"

// Combine image sources into arrays
const regularImages = [regular1, regular2, regular3, regular4];
const premiumImages = [premium1, premium2, premium3, premium4];


// --- 1. MODAL COMPONENT ---
// Eta holo shei popup window ja chobi dekhanor jonno byabohar kora hobe
const ImageModal = ({ src, alt, onClose }) => {
    if (!src) return null; // Jodi kono chobi select na thake, modal hide thakbe

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose} // Modal-er baire click korleo bondho hobe
        >
            <div
                className="relative max-w-4xl max-h-full w-full h-auto"
                onClick={(e) => e.stopPropagation()} // Bhitorer content-e click korle bondho hobe na
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 md:-right-10 text-white text-4xl font-light hover:text-red-500 transition-colors z-50"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Image Display */}
                <div className="bg-white rounded-lg shadow-2xl p-2 md:p-2">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full max-h-[85vh]  rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};


// --- 2. IMAGE CARD COMPONENT (Clickable) ---
const ImageSquareCard = ({ src, alt, isPremium = false, onClick }) => (
    // 'cursor-pointer' added for click functionality
    <div
        onClick={onClick}
        className={`
            overflow-hidden rounded-lg shadow-xl cursor-pointer
            aspect-square w-full transition-all duration-300 hover:shadow-2xl hover:brightness-105
            ${isPremium ? 'border-4 border-yellow-500' : 'border border-gray-300'}
        `}
    >
        <img
            src={src}
            alt={alt}
            className="w-full h-full "
        />
    </div>
);


// --- 3. MAIN SECTION COMPONENT ---
const PackagesSection = () => {
    // State to manage the modal visibility and the image to display
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (src, alt) => {
        setSelectedImage({ src, alt });
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="text-center mb-12 md:mb-16">
                {/* Your Headline */}
                <h1 className='text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3'>
                    Our <span className="text-blue-600">Chitromul</span> Photo Packages
                </h1>
                {/* Your Description */}
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    Our most popular packages are listed here. Click on any photo to view it in full size.
                </p>
            </div>
            <div className="container mx-auto px-4 max-w-full">

                {/* Regular Packages Section */}
                <h1 className='text-3xl md:text-4xl my-5 text-center font-extrabold text-gray-800 border-b-4 border-blue-500 inline-block mx-auto pb-1'>
                    Regular Packages
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    {regularImages.map((src, index) => (
                        <ImageSquareCard
                            key={`regular-${index}`}
                            src={src}
                            alt={`Regular Package ${index + 1}`}
                            isPremium={false}
                            onClick={() => openModal(src, `Regular Package ${index + 1}`)}
                        />
                    ))}
                </div>

                <hr className="my-8 border-t-2 border-dashed border-gray-400" />

                {/* Premium Packages Section */}
                <h1 className='text-3xl md:text-4xl my-5 text-center font-extrabold text-gray-800 border-b-4 border-yellow-500 inline-block mx-auto pb-1'>
                    Premium Packages
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {premiumImages.map((src, index) => (
                        <ImageSquareCard
                            key={`premium-${index}`}
                            src={src}
                            alt={`Premium Package ${index + 1}`}
                            isPremium={true}
                            onClick={() => openModal(src, `Premium Package ${index + 1}`)}
                        />
                    ))}
                </div>
            </div>

            {/* The Image Modal is rendered here */}
            <ImageModal
                src={selectedImage ? selectedImage.src : null}
                alt={selectedImage ? selectedImage.alt : ""}
                onClose={closeModal}
            />
        </section>
    );
};

export default PackagesSection;