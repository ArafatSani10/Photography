const OurProcess = () => {
  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We understand your vision and requirements",
      icon: "💬"
    },
    {
      step: "02", 
      title: "Planning",
      description: "Customized shoot plan and timeline",
      icon: "📋"
    },
    {
      step: "03",
      title: "Shooting",
      description: "Professional photography session",
      icon: "📸"
    },
    {
      step: "04",
      title: "Delivery",
      description: "Edited photos and final delivery",
      icon: "🎁"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-gray-600 mt-4">Simple, transparent, and professional workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform translate-y-8"></div>
          
          {process.map((item, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl text-white transform group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                
                <div className="text-sm font-bold text-blue-600 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;