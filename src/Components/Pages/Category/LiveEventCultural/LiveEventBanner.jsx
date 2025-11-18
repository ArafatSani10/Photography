import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const LiveEventBanner = () => {
    const banners = [
        {
            image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            title: "Live Event & Cultural Coverage",
            text: "Capturing vibrant cultural moments and live events that create unforgettable memories.",
        },
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden" id="live-event">
            <Swiper
                spaceBetween={0}
                centeredSlides
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-full bannerSwiper"
            >
                {banners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                                <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight shadow-text">
                                    {item.title}
                                </h2>
                                <p className="text-sm md:text-xl lg:text-2xl max-w-3xl font-light mb-8 opacity-90">
                                    {item.text}
                                </p>
                                {item.button && (
                                    <button className="px-10 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 hover:text-white transform hover:scale-105">
                                        {item.button}
                                    </button>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100">
                <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer p-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 shadow-2xl opacity-70 hover:opacity-100">
                <ChevronRight className="w-6 h-6 text-white" />
            </div>

            <style jsx global>{`
                .bannerSwiper .swiper-button-prev:after,
                .bannerSwiper .swiper-button-next:after {
                    content: '';
                    font-size: 0;
                }
                .swiper-button-prev-custom:after,
                .swiper-button-next-custom:after {
                    content: none; 
                }
                .bannerSwiper .swiper-button-prev-custom { left: 20px; }
                .bannerSwiper .swiper-button-next-custom { right: 20px; }
                .bannerSwiper .swiper-pagination-bullet-active { background: #3b82f6 !important; width: 12px; height: 12px; }
                .bannerSwiper .swiper-pagination-bullet { background: white; opacity: 0.7; transition: all 0.3s; }
                .shadow-text { text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); }
            `}</style>
        </div>
    );
};

export default LiveEventBanner;
