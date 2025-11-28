import React, { useState, useEffect } from 'react';

const OurCreativity = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    // Service Data Array (Simplified hover classes)
    const creativityItems = [
        {
            id: 1,
            title: "Photography",
            description: "Every frame tells a story — of love, laughter, and timeless emotion. We capture not just how it looks, but how it felt. (Wedding • Portrait • Event • Lifestyle • Product)",
            icon: "📸",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            id: 2,
            title: "Video Production",
            description: "From wedding highlights to brand films — we craft visual journeys that move hearts and inspire minds. Our team transforms every idea into a cinematic experience. (Short Films • Music Videos • Corporate • Promo Reels)",
            icon: "🎥",
            gradient: "from-orange-500 to-red-500",
        },
        {
            id: 3,
            title: "Event Management",
            description: "Behind every successful event lies perfect coordination and creative planning. From concept to execution — we manage your special moments with precision, care, and a touch of cinematic flair. (Wedding • Cultural • Corporate • Promotional Events)",
            icon: "🗓️",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            id: 4,
            title: "Film & Documentary",
            description: "We believe every story deserves to be told beautifully. From real-life moments to creative narratives — we bring depth, emotion, and purpose to the screen. (Documentary • Narrative Film • Visual Storytelling)",
            icon: "🎬",
            gradient: "from-teal-500 to-blue-500",
        },
        {
            id: 5,
            title: "Photo Retouching & Color Grading",
            description: "Perfection lies in the details. We refine each frame with care balancing tones, enhancing colors, and giving your visuals that signature cinematic feel.",
            icon: "✨",
            gradient: "from-indigo-500 to-purple-500",
        }
    ];

    // YouTube Configuration
    const youtubeVideoId = "WQeFGRVY36s";
    const youtubeChannelLink = "https://www.youtube.com/@chitromul";
    const youtubeChannelName = "Chitromul (চিত্রমূল) ";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-full mx-auto"> {/* max-w-full is kept as requested */}
                {/* Animated Header Section */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <h1 className='text-2xl md:text-5xl font-black text-gray-900 mb-6'>
                        Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>Creativity</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                        We blend artistic vision with technical precision to deliver exceptional results across all our disciplines.
                    </p>
                </div>

                {/* Main Content Layout: Cards (Left, 3/5) and Video (Right, 2/5) */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Left Column: Modern Animated Cards */}
                    <div className="order-2 lg:order-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {creativityItems.map((item, index) => (
                            <div
                                key={item.id}
                                // 'group' class must be here
                                className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            // onMouseEnter/onMouseLeave remove kora holo, shudhu CSS hover bebohar korar jonno
                            >

                                {/* **SHUDHU Animated TOP Border Color** */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${item.gradient} transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}
                                />

                                {/* Main Card Content - FLAT Design */}
                                <div
                                    className={`relative bg-white rounded-xl p-4 h-full border border-gray-200 transition-all duration-300 transform group-hover:scale-[1.02] shadow-md group-hover:shadow-lg`}
                                >

                                    {/* Icon */}
                                    <div className="relative mb-3">
                                        <div
                                            className={`text-3xl text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} transition-transform duration-300`}
                                        >
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className={`text-lg font-bold mb-2 text-gray-800 transition-colors duration-300`}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* Description (Compact) */}
                                    <p
                                        className={`text-gray-500 text-xs leading-snug transition-colors duration-300`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Video Section */}
                    <div
                        className={`order-1 lg:order-2 lg:col-span-2 lg:sticky lg:top-20 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                    >
                        <div className="relative group">
                            {/* Video Container */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-gray-900">

                                {/* YouTube Embed */}
                                <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full rounded-xl"
                                        src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&showinfo=0&mute=1&autoplay=0`}
                                        title="Featured Creative Showcase Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>

                            {/* Enhanced Channel Link (Simplified) */}
                            <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                                <a
                                    href={youtubeChannelLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between text-gray-800 hover:text-red-600 transition-all duration-300"
                                >
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Visit Our Channel</p>
                                            <p className="text-base font-bold">{youtubeChannelName}</p>
                                        </div>
                                    </div>
                                    <svg className="w-4 h-4 text-red-600 transform transition-transform duration-300 hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCreativity;
