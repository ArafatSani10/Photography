import React from 'react';

const OurServices = () => {
 const services = [
    {
      title: "Wedding Photography",
      description: "Capturing the raw emotion, timeless moments, and genuine narrative of your special day with an artistic touch.",
      icon: "📸",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Wedding Cinematography",
      description: "Crafting a cinematic, high-definition film that tells the beautiful, flowing story of your wedding day.",
      icon: "🎥",
      gradient: "from-pink-500 to-blue-600"
    },
    {
      title: "Pre & Post Wedding Shoots",
      description: "Creative and relaxed photography sessions to celebrate your journey and bond before and after the matrimonial event.",
      icon: "💑",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Event & Food Photography",
      description: "Professional, high-impact visuals for corporate events, private parties, and mouth-watering, detailed food presentations.",
      icon: "🎪",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Outdoor Photography",
      description: "Stunning portraits and candid shots utilizing natural light and beautiful, scenic locations as the perfect backdrop.",
      icon: "🌄",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Customized Photo AI",
      description: "Leveraging cutting-edge artificial intelligence for creative editing, unique visual effects, and photo restoration services.",
      icon: "🤖",
      gradient: "from-gray-600 to-slate-700"
    },
    {
      title: "Event Management",
      description: "Comprehensive planning, logistics, and on-site execution to ensure your entire event runs flawlessly from start to finish.",
      icon: "📅", // Updated icon for better relevance
      gradient: "from-gray-600 to-slate-700"
    },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Capturing your most precious moments with creativity and passion
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl text-white mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default OurServices;