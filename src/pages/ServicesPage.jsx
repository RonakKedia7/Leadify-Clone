import { useState } from "react";
import ServiceItem from "../components/ServiceItem";

function ServicesPage() {
  const features = [
    "High-converting landing pages",
    "Mobile-optimized layouts",
    "Lead capture forms",
    "Follow-up pages",
  ];

  const services = [
    { number: "01", title: "Lead Generation System" },
    { number: "02", title: "Funnel Optimization" },
    { number: "03", title: "CRM and Automation" },
    { number: "04", title: "Paid Advertising" },
  ];

  const [activeService, setActiveService] = useState("01");

  return (
    <div className="py-8 px-3 sm:p-12 md:p-14 lg:px-14 lg:py-22 min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="w-full lg:w-5/12 xl:w-1/3 relative min-h-80 lg:min-h-full">
        <div className="absolute inset-0 bg-[url('/services-texture.jpeg')] bg-cover bg-center"></div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20"></div>

        <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-8 md:px-10 lg:px-12 py-10 md:py-12">
          <div className="space-y-5 max-w-md">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0"></div>

                <p className="text-white text-sm sm:text-[15px] font-light tracking-wide leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-7/12 xl:w-2/3 flex flex-col">
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 py-5">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#111111] tracking-tight mb-6 leading-tight">
            Services
          </h1>

          <p className="text-[#8d8d8d] text-sm sm:text-base xl:text-xl leading-relaxed max-w-2xl font-light text-sans">
            These metrics reflect how efficiently and consistently we deliver
            strong performance, maximize ROI, and create long-term success for
            our clients.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col h-full">
          {services.map((service) => (
            <ServiceItem
              key={service.number}
              number={service.number}
              title={service.title}
              isDark={activeService === service.number}
              onClick={() => setActiveService(service.number)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
