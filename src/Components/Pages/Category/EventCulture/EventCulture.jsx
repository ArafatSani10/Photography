import React from "react";
import { motion } from "framer-motion";
import EventCultureBanner from "./EventCultureBanner";


const eventCultureImages = [
    { id: 1, src: "/Live Event Culture/DSC00173.jpg", alt: "Live Event Culture Photo" },
    { id: 2, src: "/Live Event Culture/DSC00199.jpg", alt: "Live Event Culture Photo" },
    { id: 3, src: "/Live Event Culture/DSC00210.jpg", alt: "Live Event Culture Photo" },
    { id: 4, src: "/Live Event Culture/DSC00234.jpg", alt: "Live Event Culture Photo" },
    { id: 5, src: "/Live Event Culture/DSC00254.jpg", alt: "Live Event Culture Photo" },
    { id: 6, src: "/Live Event Culture/DSC00267.jpg", alt: "Live Event Culture Photo" },
    { id: 7, src: "/Live Event Culture/DSC00276.jpg", alt: "Live Event Culture Photo" },
    { id: 8, src: "/Live Event Culture/DSC00280.jpg", alt: "Live Event Culture Photo" },
    { id: 9, src: "/Live Event Culture/DSC00292.jpg", alt: "Live Event Culture Photo" },
    { id: 10, src: "/Live Event Culture/DSC00346_1.jpg", alt: "Live Event Culture Photo" },
    { id: 11, src: "/Live Event Culture/DSC00351.jpg", alt: "Live Event Culture Photo" },
    { id: 12, src: "/Live Event Culture/DSC00361.jpg", alt: "Live Event Culture Photo" },
    { id: 13, src: "/Live Event Culture/DSC00373.jpg", alt: "Live Event Culture Photo" },

];


const EmptyGalleryMessage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 px-4 max-w-xl mx-auto"
        >
            <h3 className="text-2xl font-bold text-red-600 mb-2">
                Gallery Not Available Yet
            </h3>
            <p className="text-gray-600 text-lg">
                No **Event Culture Photography** images available at this moment.
                Please check back soon!
            </p>
        </motion.div>
    );
};

const PhotoCard = ({ photo }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full rounded-xl overflow-hidden shadow-lg transition duration-500 transform hover:shadow-2xl hover:-translate-y-1 cursor-pointer break-inside-avoid"
        >
            <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto"
                loading="lazy"
            />
        </motion.div>
    );
};

const EventCulture = () => {
    const isGalleryEmpty = eventCultureImages.length === 0;

    return (
        <div className="bg-white min-h-screen">
            <EventCultureBanner />

            {isGalleryEmpty ? (
                <EmptyGalleryMessage />
            ) : (
                <section className="py-20 px-4 md:px-8 max-w-full mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-black mb-16 border-b-2 border-red-500 pb-2">
                        Live    Event Culture Photography
                    </h2>

                    <div className="columns-1 md:columns-3 lg:columns-4 space-y-6">
                        {eventCultureImages.map((photo) => (
                            <PhotoCard key={photo.id} photo={photo} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default EventCulture;