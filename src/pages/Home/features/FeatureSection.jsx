
 
import img1 from "../../../assets/benifits/live-tracking.png"
import img2 from "../../../assets/benifits/safe-delivery.png"
import img3 from "../../../assets/benifits/safe-delivery.png"

const FeaturesSection = () => {

  const images = [img1,img2,img3]

  const features = [
    {
       
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
 
       
   
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
     
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
   
    }
  ];

  return (
    <section className="py-20 bg-base-200 px-5">
      <div className="max-w-7xl mx-auto px-4 space-y-16 gap-4">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex flex-col  md:flex-row items-center gap-10
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                  <div>
                    <img src={images[index] }></img>
                  </div>
              {/* Text */}
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default FeaturesSection;








// import {
//   FaClock,
//   FaMoneyCheckAlt,
//   FaSmile
// } from "react-icons/fa";

// const FeatureSection = () => {

//   const benefits = [
//     {
//       title: "Fast Delivery",
//       description:
//         "Quick and reliable parcel delivery ensuring your shipments reach their destination on time without delays.",
//       icon: FaClock
//     },
//     {
//       title: "Affordable Pricing",
//       description:
//         "Cost-effective delivery solutions with transparent pricing and no hidden charges for your peace of mind.",
//       icon: FaMoneyCheckAlt
//     },
//     {
//       title: "Customer Satisfaction",
//       description:
//         "Dedicated service and support focused on delivering a smooth, hassle-free experience for every customer.",
//       icon: FaSmile
//     }
//   ];

//   return (
//     <section className="py-20 bg-base-100 gap-4">
//       <div className="max-w-7xl mx-auto px-4 gap-4">

//         {/* Section Title */}
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Our Benefits
//         </h2>

//         {/* Cards */}
//         <div className=" grid grid-rows-3 gap-6">

//           {benefits.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="
//                   flex items-center gap-6
//                   bg-base-200
//                   p-6 rounded-xl
//                   hover:shadow-lg transition
//                 "
//               >
//                 {/* Left Icon */}
//                 <div className="text-primary text-4xl">
//                   <Icon />
//                 </div>

//                 {/* Divider */}
//                 <div className="h-12 w-px bg-gray-300"></div>

//                 {/* Right Content */}
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default  FeatureSection;
