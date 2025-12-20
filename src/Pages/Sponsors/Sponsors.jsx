import React from "react";
import devfolioDark from "../../assets/Devfolio_Logo-White.png";
import devfolioLight from "../../assets/Devfolio_Logo-Black.png";
import ethindiaDark from "../../assets/ethindia-light.png";
import ethindiaLight from "../../assets/ethindia-dark.png";

const sponsors = [
  {
    name: "Devfolio",
    link: "https://devfolio.co",
    hover:
      "hover:border-[#808080]/15 hover:bg-[#808080]/5 group-hover:border-[#808080]/20",
  },
  {
    name: "ETHIndia",
    link: "https://ethindia.co",
    hover:
      "hover:border-[#2e4deb]/15 hover:bg-[#2e4deb]/5 group-hover:border-[#2e4deb]/20",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="pb-8 md:pb-12">
      <h2 className="text-3xl font-bold text-center mb-8 md:mb-10 text-gray-900 dark:text-gray-100">
        SPONSORS
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sponsors.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group
                bg-[#98c2c9]/40 dark:bg-[#1f2937]/70
                backdrop-blur-md
                rounded-xl
                p-6
                flex items-center justify-center
                shadow-sm hover:shadow-lg
                transition-all duration-300
                border border-white/20 dark:border-white/10
                ${logo.hover}
              `}
            >
              {/* DEVFOLIO */}
              {logo.name === "Devfolio" && (
                <>
                  <img
                    src={devfolioLight}
                    alt="DEVFOLIO LOGO"
                    className="block dark:hidden w-40 h-14 md:h-20 object-contain"
                  />
                  <img
                    src={devfolioDark}
                    alt="DEVFOLIO LOGO"
                    className="hidden dark:block w-40 h-14 md:h-20 object-contain"
                  />
                </>
              )}

              {/* ETHINDIA */}
              {logo.name === "ETHIndia" && (
                <>
                  <img
                    src={ethindiaLight}
                    alt="ETHINDIA LOGO"
                    className="block dark:hidden w-40 h-14 md:h-20 object-contain"
                  />
                  <img
                    src={ethindiaDark}
                    alt="ETHINDIA LOGO"
                    className="hidden dark:block w-40 h-14 md:h-20 object-contain"
                  />
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
