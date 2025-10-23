import React from 'react';

// Define the client logos with public paths and company names
const clientLogos = [
    { id: 1, src: '/clientworks/Chiklee Resort And Convention Center.jpg', alt: 'Chiklee Resort And Convention Center' },
    { id: 2, src: '/clientworks/Daily Intizar.jpg', alt: 'Daily Intizar Newspaper' },
    { id: 3, src: '/clientworks/Kureghor.jpg', alt: 'Kureghor Band' },
    { id: 4, src: '/clientworks/MBSTU_logo.png', alt: 'MBSTU University' },
    { id: 5, src: '/clientworks/ছায়া নীড়.png', alt: 'Chhaya Nir Community' },
    { id: 6, src: '/clientworks/VBD.jpg', alt: 'Volunteer for Bangladesh' },
    { id: 7, src: '/clientworks/New.jpg.jpg', alt: 'BGIFT Institute of Science & Technology' },
];

// 1. **সংশোধন:** ফাংশনের নামটি `ClientWorkLogos` রাখা হলো।
const TestimonialSection = () => {
    return (
        <div className='bg-white py-16 sm:py-24'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='text-center mb-12 sm:mb-16'>
                    <h1 className='text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900'>
                        <span className='block'>Successfully completed visual Project with </span>

                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        We're proud to have collaborated with these amazing clients on their visual projects.
                    </p>
                </div>

                {/* Clients/Logo Section: আধুনিক গ্রিড লেআউট */}
                <div className="mt-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center">
                        {clientLogos.map((logo) => (
                            <div key={logo.id} className="col-span-1 flex justify-center py-6 px-4  rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <img
                                    className="max-h-20 w-auto object-contain "
                                    // 2. **নিশ্চিতকরণ:** src অ্যাট্রিবিউটে logo.src সঠিকভাবেই ব্যবহার করা হয়েছে।
                                    src={logo.src}
                                    alt={logo.alt}
                                    onError={(e) => {
                                        console.error("Failed to load logo image:", logo.src);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. **সংশোধন:** কম্পোনেন্টের সঠিক নাম `ClientWorkLogos` এক্সপোর্ট করা হলো।
export default TestimonialSection;