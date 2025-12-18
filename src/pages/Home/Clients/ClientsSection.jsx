// src/pages/Home/clients/ClientsSection.jsx

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/star.png";
import logo7 from "../../../assets/brands/start_people.png";

const ClientsSection = () => {

  const clientsLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Trusted By Our Clients
        </h2>

        <marquee
          direction="left"
          scrollamount="6"
          pauseonhover="true"
        >
          <div className="flex items-center gap-16 py-4">
            {clientsLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Client Logo"
                className="
                  h-6 md:h-14
                  w-auto
                  object-contain
                  grayscale
                  hover:grayscale-0
                  transition duration-300
                "
              />
            ))}
          </div>
        </marquee>

      </div>
    </section>
  );
};

export default ClientsSection;
