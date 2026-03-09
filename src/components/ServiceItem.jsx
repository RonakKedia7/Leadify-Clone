import { ArrowUpRight, ArrowRight } from "lucide-react";

function ServiceItem({ number, title, isDark = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 pt-10 lg:pt-0 min-h-27.5 group relative border-t border-gray-200 transition-all duration-300 ${
        isDark
          ? "bg-[url('/service-bg.jpeg')] bg-cover bg-center text-white"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 md:px-12 lg:px-14 h-full cursor-pointer">
        {/* Left */}
        <div className="flex items-center gap-6 flex-1">
          <span
            className={`text-sm font-light tracking-wide ${
              isDark ? "text-white" : "text-[#8d8d8d]"
            }`}
          >
            {number}
          </span>

          <h3
            className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-serif font-light tracking-tighter ${
              isDark ? "text-white" : "text-[#8d8d8d]"
            }`}
          >
            {title}
          </h3>
        </div>

        {/* Arrow */}
        {isDark ? (
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        ) : (
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#555555] transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </div>
    </div>
  );
}

export default ServiceItem;
