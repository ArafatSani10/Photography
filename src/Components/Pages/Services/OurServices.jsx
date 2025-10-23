import React from 'react';

const OurServices = () => {
const services = [
  // 1. Wedding Group (Sub-categories as main services)
  {
    title: "Gaye Holud ",
    description: "Vibrant and joyful documentation of the traditional Gaye Holud ceremony, focusing on lively colors, rituals, and candid emotions.",
    icon: "🌼", // Flower/Marigold for Holud
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Wedding & Main Ceremony",
    description: "Full-coverage photography and cinematography for the main wedding event, capturing every essential ritual, emotion, and significant moment.",
    icon: "💍", // Wedding Ring
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Reception",
    description: "Elegant coverage of the post-wedding reception, including guest interactions, stage moments, and the overall celebratory atmosphere.",
    icon: "🥂", // Toasting Glasses/Celebration
    gradient: "from-purple-500 to-violet-600"
  },
  {
    title: "Pre & Post Wedding Shoots",
    description: "Creative and romantic photo/video shoots in scenic outdoor locations, perfect for capturing stunning portraits before (Pre) or after (Post) the wedding.",
    icon: "💖", // Heart/Love
    gradient: "from-blue-500 to-cyan-500"
  },
  // 2. Outdoor
  {
    title: "Outdoor & Portfolio Shoots",
    description: "Professional coverage for personal portraits, fashion editorials, and general creative content filmed in diverse outdoor settings.",
    icon: "🏞️", // Landscape/Outdoor Scene
    gradient: "from-green-500 to-teal-500"
  },
  // 3. Birthday & Annaprashan
  {
    title: "Birthday & Annaprashan",
    description: "Capturing the joy, candid moments, and milestones of birthday parties, Annaprashan (first rice ceremony), and other intimate family events.",
    icon: "🎂", // Birthday Cake/Celebration
    gradient: "from-orange-500 to-red-500"
  },
  // 4. Corporate
  {
    title: "Corporate & Commercial Events",
    description: "Expert coverage for professional corporate events, seminars, product launches, conferences, and high-quality commercial content for brands.",
    icon: "💼", // Briefcase/Professional
    gradient: "from-gray-600 to-slate-800"
  },
  // 5. Documentary
  {
    title: "Documentary Film Making",
    description: "In-depth research, conceptualization, filming, and post-production for long-form documentary films on social, historical, or educational subjects.",
    icon: "🎬", // Clapperboard/Filming
    gradient: "from-teal-600 to-cyan-700"
  },
  // 6. Music Video
  {
    title: "Music Video Production",
    description: "Full-service music video production, covering theme development, high-quality filming, and creative post-production tailored to the song.",
    icon: "🎵", // Musical Note
    gradient: "from-indigo-500 to-blue-600"
  },
  // 7. Event Management
  {
    title: "Event Management",
    description: "Complete solution for planning, coordination, venue management, logistics, and successful execution of all types of events, small to large.",
    icon: "🗓️", // Calendar/Schedule
    gradient: "from-pink-600 to-fuchsia-700"
  },
];

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
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
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-60" 
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative p-6"> {/* Reduced p-8 to p-6 for a tighter card */}
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl text-white mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description - Text size reduced for a better fit */}
                <p className="text-sm text-gray-600 leading-snug group-hover:text-gray-700 transition-colors duration-300"> 
                  {service.description}
                </p>

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