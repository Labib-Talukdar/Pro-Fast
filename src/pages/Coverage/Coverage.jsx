//  import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const Coverage = () => {
//   return (
//     <>

//       <style>
//         {`
//           .coverage-page {
//             padding: 40px;
//             font-family: Arial, sans-serif;
//           }

//           .coverage-title {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .coverage-map {
//             height: 450px;
//             width: 100%;
//             border-radius: 10px;
//           }
//         `}
//       </style>

//       <div className="coverage-page">
//         <h1 className="coverage-title text-6xl font-semibold">
//           We are available in 64 districts
//         </h1>

//         <MapContainer
//           center={[23.685, 90.3563]}
//           zoom={7}
//           className="coverage-map"
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; OpenStreetMap contributors"
//           />

//           <Marker position={[23.685, 90.3563]}>
//             <Popup>
//               আমরা বাংলাদেশের সব ৬৪টি জেলায় সেবা দিচ্ছি
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </>
//   );
// };

// export default Coverage;






import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import districts from "./Districts";
import { useRef, useState } from "react";

const Coverage = () => {
  const [search, setSearch] = useState("");
  const mapRef = useRef(null);

  const filteredDistricts = districts.filter((items) =>
    items.district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>
        {`
          .coverage-page {
            padding: 40px;
            font-family: Arial, sans-serif;
          }

          .coverage-title {
            text-align: center;
            margin-bottom: 20px;
          }

          .coverage-map {
            height: 450px;
            width: 100%;
            border-radius: 10px;
          }
        `}
      </style>

      <div className="coverage-page">
        <h1 className="coverage-title text-6xl font-semibold">
          We are available in 64 districts
        </h1>

        <div style={{ maxWidth: "400px", margin: "0 auto 20px", display: "flex"}}>
          <input
            type="text"
            placeholder="Search district"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}></input>
            
        </div>

        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          className="coverage-map"
          whenCreated= {(mapInstance) => {
            mapRef.current = mapInstance
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {/* search bar add */}
{/* 
          {districts.map((item, index) => (
  <Marker
    key={index}
    position={[item.latitude, item.longitude]}
  >
    <Popup>
      <div>
        <div className="popup-title">
          {item.district} ({item.region})
        </div>

        <div>
          <strong>City:</strong> {item.city}
        </div>

        <div className="covered-area">
          <strong>Covered Area:</strong><br />
          {item.covered_area.join(", ")}
        </div>

        <div>
          <strong>Status:</strong> {item.status}
        </div>
      </div>
    </Popup>
  </Marker>
))} */}

          {filteredDistricts.map((item, index) => (
            <Marker key={index} position={[item.latitude, item.longitude]}>
              <Popup>
                <div>
                  <strong>{item.district}</strong> ({item.region})<br></br>
                  City: {item.city} <br></br>
                  Covered: {item.covered_area.join(",")}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Coverage;


/* step 2 go button
*/

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import districts from "./Districts";
// import { useRef, useState } from "react";

// const Coverage = () => {
//   const [search, setSearch] = useState("");
//   const mapRef = useRef(null);

//   const filteredDistricts = districts.filter((items) =>
//     items.district.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleGo = () => {
//     const foundDistrict = districts.find(
//         (item) => item.district.toLowerCase() === search.toLowerCase()
//     );

//     if(foundDistrict && mapRef.current) {
//         mapRef.current.setView(
//             [foundDistrict.latitude, foundDistrict.longitude], 10
//         );
//     } else {
//         alert("District not found");
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           .coverage-page {
//             padding: 40px;
//             font-family: Arial, sans-serif;
//           }

//           .coverage-title {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .coverage-map {
//             height: 450px;
//             width: 100%;
//             border-radius: 10px;
//           }
//         `}
//       </style>

//       <div className="coverage-page">
//         <h1 className="coverage-title text-6xl font-semibold">
//           We are available in 64 districts
//         </h1>

//         <div style={{ maxWidth: "400px", margin: "0 auto 20px", display: "flex", gap: "8px"}}>
//           <input
//             type="text"
//             placeholder="Search district"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleGo()}
//             style={{
//               width: "100%",
//               padding: "10px 14px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//               fontSize: "16px",
//             }}
//           />
//           <button 
//             onClick={handleGo}  
//             style={{
//               padding: "10px 18px",
//               borderRadius: "8px",
//               border: "none",
//               backgroundColor: "#2563eb",
//               color: "#fff",
//               fontSize: "16px",
//               cursor: "pointer"
//             }}
//           >
//             Go
//           </button>
//         </div>

//         <MapContainer
//           center={[23.685, 90.3563]}
//           zoom={7}
//           className="coverage-map"
//           ref={mapRef}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; OpenStreetMap contributors"
//           />

//           {filteredDistricts.map((item, index) => (
//             <Marker key={index} position={[item.latitude, item.longitude]}>
//               <Popup>
//                 <div>
//                   <strong>{item.district}</strong> ({item.region})<br/>
//                   City: {item.city} <br/>
//                   Covered: {item.covered_area.join(", ")}
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </>
//   );
// };

// export default Coverage;