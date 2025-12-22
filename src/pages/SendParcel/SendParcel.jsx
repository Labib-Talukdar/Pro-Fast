//  import { useForm } from "react-hook-form";

// const SendParcel = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Parcel Data:", data);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-base-100 shadow rounded-xl">
//       <h2 className="text-2xl font-semibold mb-6">Add Parcel</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

//         {/* Parcel Type */}
//         <div className="flex gap-6">
//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               value="Document"
//               {...register("parcelType", { required: true })}
//               className="radio radio-success"
//             />
//             Document
//           </label>

//           <label className="flex items-center gap-2">
//             <input
//               type="radio"
//               value="Non-Document"
//               {...register("parcelType", { required: true })}
//               className="radio radio-success"
//             />
//             Non-Document
//           </label>
//         </div>

//         {/* Parcel Info */}
//         <div className="grid md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Parcel Name"
//             className="input input-bordered w-full"
//             {...register("parcelName",{
//                 required: "Parcel name is required",
//               })}
//           />
            
//           <input
//             type="number"
//             placeholder="Parcel Weight (KG)"
//             className="input input-bordered w-full"
//             {...register("weight", { required: true })}
//           />
//         </div>

//         {/* Sender Details */}
//         <div>
//           <h3 className="font-semibold mb-3">Sender Details</h3>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Sender Name"
//               className="input input-bordered w-full"
//               {...register("senderName", { required: true })}
//             />

//             <select
//               className="select select-bordered w-full"
//               {...register("senderWarehouse", { required: true })}
//             >
//               <option value="">Sender Pickup Warehouse</option>
//               <option>Dhaka Hub</option>
//               <option>Chattogram Hub</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Sender Address"
//               className="input input-bordered w-full"
//               {...register("senderAddress", { required: true })}
//             />

//             <input
//               type="text"
//               placeholder="Sender Contact No"
//               className="input input-bordered w-full"
//               {...register("senderPhone", { required: true })}
//             />

//             <select
//               className="select select-bordered w-full"
//               {...register("senderRegion", { required: true })}
//             >
//               <option value="">Your Region</option>
//               <option>Dhaka</option>
//               <option>Chattogram</option>
//               <option>Sylhet</option>
//             </select>
//           </div>

//           <textarea
//             className="textarea textarea-bordered w-full mt-3"
//             placeholder="Pickup Instruction"
//             {...register("pickupInstruction")}
//           />
//         </div>

//         {/* Receiver Details */}
//         <div>
//           <h3 className="font-semibold mb-3">Receiver Details</h3>

//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Receiver Name"
//               className="input input-bordered w-full"
//               {...register("receiverName", { required: true })}
//             />

//             <select
//               className="select select-bordered w-full"
//               {...register("receiverWarehouse", { required: true })}
//             >
//               <option value="">Receiver Delivery Warehouse</option>
//               <option>Dhaka Hub</option>
//               <option>Chattogram Hub</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Receiver Address"
//               className="input input-bordered w-full"
//               {...register("receiverAddress", { required: true })}
//             />

//             <input
//               type="text"
//               placeholder="Receiver Contact No"
//               className="input input-bordered w-full"
//               {...register("receiverPhone", { required: true })}
//             />

//             <select
//               className="select select-bordered w-full"
//               {...register("receiverRegion", { required: true })}
//             >
//               <option value="">Receiver Region</option>
//               <option>Dhaka</option>
//               <option>Rajshahi</option>
//               <option>Khulna</option>
//             </select>
//           </div>

//           <textarea
//             className="textarea textarea-bordered w-full mt-3"
//             placeholder="Delivery Instruction"
//             {...register("deliveryInstruction")}
//           />
//         </div>

//         {/* Submit */}
//         <button className="btn btn-success bg-[#CAEB66] w-full">
//           Proceed to Confirm Booking
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SendParcel;









// 2nd file


// import { useForm } from "react-hook-form";
// import { useState } from "react";

// const SendParcel = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const [showModal, setShowModal] = useState(false);
//   const [priceInfo, setPriceInfo] = useState(null);

//   // ---------------- PRICE CALCULATION ----------------
//   const calculatePrice = (data) => {
//     const { parcelType, weight, senderRegion, receiverRegion } = data;
//     const isWithinCity = senderRegion === receiverRegion;

//     let price = 0;
//     let breakdown = "";

//     if (parcelType === "Document") {
//       price = isWithinCity ? 60 : 80;
//       breakdown = isWithinCity
//         ? "Document (Within City) = ৳60"
//         : "Document (Outside City) = ৳80";
//     }

//     if (parcelType === "Non-Document") {
//       const w = Number(weight);

//       if (w <= 3) {
//         price = isWithinCity ? 110 : 150;
//         breakdown = isWithinCity
//           ? "Non-Document up to 3kg (Within City) = ৳110"
//           : "Non-Document up to 3kg (Outside City) = ৳150";
//       } else {
//         const extraKg = w - 3;
//         const basePrice = isWithinCity ? 110 : 150;
//         const extraCharge = extraKg * 40;
//         const outsideExtra = isWithinCity ? 0 : 40;

//         price = basePrice + extraCharge + outsideExtra;

//         breakdown = `
// Base Price: ৳${basePrice}
// Extra Weight: ${extraKg}kg × ৳40 = ৳${extraCharge}
// ${outsideExtra ? "Outside City Extra: ৳40" : ""}
// Total = ৳${price}
//         `;
//       }
//     }

//     return { price, breakdown, isWithinCity };
//   };

//   // ---------------- SUBMIT ----------------
// //   const onSubmit = (data) => {
// //     const result = calculatePrice(data);
// //     setPriceInfo(result);
// //     setShowModal(true);
// //   };

// //   const confirmBooking = () => {
// //     setShowModal(false);
// //     alert("✅ Parcel Booking Successful!");
// //     reset();
// //   };

// // -----------2ndSubmit-------------

// const onSubmit = (data) => {
//   const trackingId = generateTrackingId();
//   const priceResult = calculatePrice(data);

//   const finalData = {
//     ...data,
//     trackingId,
//     price: priceResult.price,
//     submittedAt: new Date().toISOString(),
//   };

//   console.log("FINAL PARCEL DATA:", finalData);

//   setPriceInfo(priceResult);
//   setShowModal(true);
// };


//    //----------------TrackingID----------

//    const generateTrackingId = () => {
//   const date = new Date();

//   const yyyy = date.getFullYear();
//   const mm = String(date.getMonth() + 1).padStart(2, "0");
//   const dd = String(date.getDate()).padStart(2, "0");

//   const random = Math.floor(1000 + Math.random() * 9000);

//   return `SP-${yyyy}${mm}${dd}-${random}`;
// };


//   // ---------------- UI ----------------
//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-base-100 shadow rounded-xl">
//       <h2 className="text-2xl font-semibold mb-6">Add Parcel</h2>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

//         {/* PARCEL TYPE */}
//         <div>
//           <div className="flex gap-6">
//             {["Document", "Non-Document"].map((type) => (
//               <label key={type} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   value={type}
//                   {...register("parcelType", {
//                     required: "Parcel type is required",
//                   })}
//                   className="radio radio-success"
//                 />
//                 {type}
//               </label>
//             ))}
//           </div>
//           {errors.parcelType && (
//             <p className="text-error text-sm mt-1">
//               {errors.parcelType.message}
//             </p>
//           )}
//         </div>

//         {/* PARCEL INFO */}
//         {/* <div className="grid md:grid-cols-2 gap-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Parcel Name"
//               className="input input-bordered w-full"
//               {...register("parcelName", {
//                 required: "Parcel name is required",
//               })}
//             />
//             {errors.parcelName && (
//               <p className="text-error text-sm">
//                 {errors.parcelName.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <input
//               type="number"
//               step="0.1"
//               placeholder="Parcel Weight (KG)"
//               className="input input-bordered w-full"
//               {...register("weight", {
//                 required: "Weight is required",
//                 min: { value: 0.1, message: "Minimum 0.1kg" },
//               })}
//             />
//             {errors.weight && (
//               <p className="text-error text-sm">
//                 {errors.weight.message}
//               </p>
//             )}
//           </div>
//         </div> */}

//         {/* PARCEL INFO */}
// <div className="grid md:grid-cols-2 gap-4">
//   <div>
//     <input
//       type="text"
//       placeholder="Parcel Name"
//       className="input input-bordered w-full"
//       {...register("parcelName", {
//         required: "Parcel name is required",
//       })}
//     />
//     {errors.parcelName && (
//       <p className="text-error text-sm">
//         {errors.parcelName.message}
//       </p>
//     )}
//   </div>

//   <div>
//     <input
//       type="number"
//       step="0.1"
//       placeholder="Parcel Weight (KG)"
//       className="input input-bordered w-full"
//       {...register("weight", {
//         required: "Weight is required",
//         min: { value: 0.1, message: "Minimum 0.1kg" },
//       })}
//     />
//     {errors.weight && (
//       <p className="text-error text-sm">
//         {errors.weight.message}
//       </p>
//     )}
//   </div>
// </div>

// {/* DESCRIPTION */}
// <div>
//   <textarea
//     placeholder="Parcel Description (What is inside the parcel)"
//     className="textarea textarea-bordered w-full"
//     {...register("description", {
//       required: "Parcel description is required",
//       minLength: {
//         value: 10,
//         message: "Description must be at least 10 characters",
//       },
//     })}
//   />
//   {errors.description && (
//     <p className="text-error text-sm mt-1">
//       {errors.description.message}
//     </p>
//   )}
// </div>


//         {/* SENDER DETAILS */}
//         <div>
//           <h3 className="font-semibold mb-3">Sender Details</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               className="input input-bordered"
//               placeholder="Sender Name"
//               {...register("senderName", { required: true })}
//             />
//             <select
//               className="select select-bordered"
//               {...register("senderWarehouse", { required: true })}
//             >
//               <option value="">Sender Pickup Warehouse</option>
//               <option>Dhaka Hub</option>
//               <option>Chattogram Hub</option>
//             </select>
//             <input
//               className="input input-bordered"
//               placeholder="Sender Address"
//               {...register("senderAddress", { required: true })}
//             />
//             <input
//               className="input input-bordered"
//               placeholder="Sender Contact No"
//               {...register("senderPhone", { required: true })}
//             />
//             <select
//               className="select select-bordered"
//               {...register("senderRegion", { required: true })}
//             >
//               <option value="">Your Region</option>
//               <option>Dhaka</option>
//               <option>Chattogram</option>
//               <option>Sylhet</option>
//             </select>
//           </div>
//         </div>

//         {/* RECEIVER DETAILS */}
//         <div>
//           <h3 className="font-semibold mb-3">Receiver Details</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               className="input input-bordered"
//               placeholder="Receiver Name"
//               {...register("receiverName", { required: true })}
//             />
//             <select
//               className="select select-bordered"
//               {...register("receiverWarehouse", { required: true })}
//             >
//               <option value="">Receiver Delivery Warehouse</option>
//               <option>Dhaka Hub</option>
//               <option>Chattogram Hub</option>
//             </select>
//             <input
//               className="input input-bordered"
//               placeholder="Receiver Address"
//               {...register("receiverAddress", { required: true })}
//             />
//             <input
//               className="input input-bordered"
//               placeholder="Receiver Contact No"
//               {...register("receiverPhone", { required: true })}
//             />
//             <select
//               className="select select-bordered"
//               {...register("receiverRegion", { required: true })}
//             >
//               <option value="">Receiver Region</option>
//               <option>Dhaka</option>
//               <option>Rajshahi</option>
//               <option>Khulna</option>
//             </select>
//           </div>
//         </div>

//         <button className="btn btn-success w-full">
//           Proceed to Confirm Booking
//         </button>
//       </form>

//       {/* PRICE MODAL */}
//       {showModal && (
//         <dialog className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Price Details</h3>

//             <pre className="bg-base-200 p-3 rounded text-sm whitespace-pre-wrap mt-4">
//               {priceInfo.breakdown}
//             </pre>

//             <p className="text-xl font-bold text-success mt-3">
//               Total Price: ৳{priceInfo.price}
//             </p>

//             <div className="modal-action">
//               <button
//                 className="btn btn-success"
//                 onClick={confirmBooking}
//               >
//                 Confirm & Submit
//               </button>
//               <button
//                 className="btn"
//                 onClick={() => setShowModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default SendParcel;







// final file

 import { useForm } from "react-hook-form";
import { useState } from "react";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [priceInfo, setPriceInfo] = useState(null);
  const [trackingId, setTrackingId] = useState("");

  // ---------------- TRACKING ID GENERATOR ----------------
  const generateTrackingId = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(1000 + Math.random * 9000);
    return `SP-${yyyy}${mm}${dd}-${random}`;
  };

  // ---------------- PRICE CALCULATION ----------------
  const calculatePrice = (data) => {
    const { parcelType, weight, senderRegion, receiverRegion } = data;
    const isWithinCity = senderRegion === receiverRegion;

    let price = 0;
    let breakdown = "";

    if (parcelType === "Document") {
      price = isWithinCity ? 60 : 80;
      breakdown = isWithinCity
        ? "Document (Within City) = ৳60"
        : "Document (Outside City) = ৳80";
    }

    if (parcelType === "Non-Document") {
      const w = Number(weight);

      if (w <= 3) {
        price = isWithinCity ? 110 : 150;
        breakdown = isWithinCity
          ? "Non-Document up to 3kg (Within City) = ৳110"
          : "Non-Document up to 3kg (Outside City) = ৳150";
      } else {
        const extraKg = w - 3;
        const basePrice = isWithinCity ? 110 : 150;
        const extraCharge = extraKg * 40;
        const outsideExtra = isWithinCity ? 0 : 40;

        price = basePrice + extraCharge + outsideExtra;

        breakdown = `Base Price: ৳${basePrice}
Extra Weight: ${extraKg.toFixed(1)}kg × ৳40 = ৳${extraCharge}
${outsideExtra ? "Outside City Extra: ৳40" : ""}
Total = ৳${price}`;
      }
    }

    return { price, breakdown, isWithinCity };
  };

  // ---------------- SUBMIT ----------------
  const onSubmit = (data) => {
    const newTrackingId = generateTrackingId();
    const priceResult = calculatePrice(data);

    const finalData = {
      ...data,
      trackingId: newTrackingId,
      price: priceResult.price,
      submittedAt: new Date().toISOString(),
    };

    console.log("FINAL PARCEL DATA:", finalData);

    setTrackingId(newTrackingId);
    setPriceInfo(priceResult);
    setShowModal(true);
  };

  const confirmBooking = () => {
    setShowModal(false);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    reset();
    setTrackingId("");
    setPriceInfo(null);
  };

  // ---------------- UI ----------------
  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-100 shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-6">Add Parcel</h2>

      <div className="space-y-6">
        {/* PARCEL TYPE */}
        <div>
          <label className="label">
            <span className="label-text font-semibold">Parcel Type</span>
          </label>
          <div className="flex gap-6">
            {["Document", "Non-Document"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={type}
                  {...register("parcelType", {
                    required: "Parcel type is required",
                  })}
                  className="radio radio-success"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
          {errors.parcelType && (
            <p className="text-error text-sm mt-1">
              {errors.parcelType.message}
            </p>
          )}
        </div>

        {/* PARCEL INFO */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="label-text">Parcel Name</span>
            </label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full"
              {...register("parcelName", {
                required: "Parcel name is required",
              })}
            />
            {errors.parcelName && (
              <p className="text-error text-sm mt-1">
                {errors.parcelName.message}
              </p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Parcel Weight (KG)</span>
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full"
              {...register("weight", {
                required: "Weight is required",
                min: { value: 0.1, message: "Minimum 0.1kg" },
              })}
            />
            {errors.weight && (
              <p className="text-error text-sm mt-1">
                {errors.weight.message}
              </p>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="label">
            <span className="label-text">Parcel Description</span>
          </label>
          <textarea
            placeholder="What is inside the parcel?"
            className="textarea textarea-bordered w-full"
            rows="3"
            {...register("description", {
              required: "Parcel description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
          />
          {errors.description && (
            <p className="text-error text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* SENDER DETAILS */}
        <div>
          <h3 className="font-semibold mb-3">Sender Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Sender Name"
                {...register("senderName", { 
                  required: "Sender name is required" 
                })}
              />
              {errors.senderName && (
                <p className="text-error text-sm mt-1">
                  {errors.senderName.message}
                </p>
              )}
            </div>
            
            <div>
              <select
                className="select select-bordered w-full"
                {...register("senderWarehouse", { 
                  required: "Sender warehouse is required" 
                })}
              >
                <option value="">Sender Pickup Warehouse</option>
                <option>Dhaka Hub</option>
                <option>Chattogram Hub</option>
              </select>
              {errors.senderWarehouse && (
                <p className="text-error text-sm mt-1">
                  {errors.senderWarehouse.message}
                </p>
              )}
            </div>
            
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Sender Address"
                {...register("senderAddress", { 
                  required: "Sender address is required" 
                })}
              />
              {errors.senderAddress && (
                <p className="text-error text-sm mt-1">
                  {errors.senderAddress.message}
                </p>
              )}
            </div>
            
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Sender Contact No"
                {...register("senderPhone", { 
                  required: "Sender phone is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Phone must be 11 digits"
                  }
                })}
              />
              {errors.senderPhone && (
                <p className="text-error text-sm mt-1">
                  {errors.senderPhone.message}
                </p>
              )}
            </div>
            
            <div>
              <select
                className="select select-bordered w-full"
                {...register("senderRegion", { 
                  required: "Sender region is required" 
                })}
              >
                <option value="">Your Region</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Sylhet</option>
              </select>
              {errors.senderRegion && (
                <p className="text-error text-sm mt-1">
                  {errors.senderRegion.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* RECEIVER DETAILS */}
        <div>
          <h3 className="font-semibold mb-3">Receiver Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Receiver Name"
                {...register("receiverName", { 
                  required: "Receiver name is required" 
                })}
              />
              {errors.receiverName && (
                <p className="text-error text-sm mt-1">
                  {errors.receiverName.message}
                </p>
              )}
            </div>
            
            <div>
              <select
                className="select select-bordered w-full"
                {...register("receiverWarehouse", { 
                  required: "Receiver warehouse is required" 
                })}
              >
                <option value="">Receiver Delivery Warehouse</option>
                <option>Dhaka Hub</option>
                <option>Chattogram Hub</option>
              </select>
              {errors.receiverWarehouse && (
                <p className="text-error text-sm mt-1">
                  {errors.receiverWarehouse.message}
                </p>
              )}
            </div>
            
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Receiver Address"
                {...register("receiverAddress", { 
                  required: "Receiver address is required" 
                })}
              />
              {errors.receiverAddress && (
                <p className="text-error text-sm mt-1">
                  {errors.receiverAddress.message}
                </p>
              )}
            </div>
            
            <div>
              <input
                className="input input-bordered w-full"
                placeholder="Receiver Contact No"
                {...register("receiverPhone", { 
                  required: "Receiver phone is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "Phone must be 11 digits"
                  }
                })}
              />
              {errors.receiverPhone && (
                <p className="text-error text-sm mt-1">
                  {errors.receiverPhone.message}
                </p>
              )}
            </div>
            
            <div>
              <select
                className="select select-bordered w-full"
                {...register("receiverRegion", { 
                  required: "Receiver region is required" 
                })}
              >
                <option value="">Receiver Region</option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
                <option>Khulna</option>
              </select>
              {errors.receiverRegion && (
                <p className="text-error text-sm mt-1">
                  {errors.receiverRegion.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button 
          type="button"
          onClick={handleSubmit(onSubmit)} 
          className="btn btn-success w-full"
        >
          Proceed to Confirm Booking
        </button>
      </div>

      {/* PRICE CONFIRMATION MODAL */}
      {showModal && priceInfo && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Price Details</h3>

            {trackingId && (
              <div className="bg-base-200 p-3 rounded mt-4">
                <p className="text-sm font-semibold">Tracking ID:</p>
                <p className="text-lg font-mono">{trackingId}</p>
              </div>
            )}

            <pre className="bg-base-200 p-3 rounded text-sm whitespace-pre-wrap mt-4">
              {priceInfo.breakdown}
            </pre>

            <p className="text-xl font-bold text-success mt-3">
              Total Price: ৳{priceInfo.price}
            </p>

            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={confirmBooking}
              >
                Confirm & Submit
              </button>
              <button
                className="btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <dialog className="modal modal-open">
          <div className="modal-box text-center">
            <div className="mb-4">
              <svg 
                className="w-20 h-20 mx-auto text-success" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>

            <h3 className="font-bold text-2xl text-success mb-3">
              Booking Successful!
            </h3>

            <div className="bg-success/10 p-4 rounded-lg mb-4">
              <p className="text-sm font-semibold mb-1">Your Tracking ID:</p>
              <p className="text-2xl font-mono font-bold text-success">
                {trackingId}
              </p>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Please save this tracking ID for future reference. 
              You can use it to track your parcel status.
            </p>

            <button
              className="btn btn-success w-full"
              onClick={closeSuccessModal}
            >
              Done
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default SendParcel;