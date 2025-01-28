// import React from "react";

// export function ImageFold() {
//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen  bg-center  pb-8"
//       style={{
//         backgroundImage: "url('/health_co_pilot_in_blue_2563eb.png')",
//       }}
//     >
//       {/* Overlay (optional, if you want text on top of the image) */}
//       <div className="absolute inset-0 bg-black/10" />

//       {/* Content */}
//       <div className="relative z-10 text-center">
//         <h1 className="text-6xl md:text-10xl font-bold text-white"
//         style={{ fontSize: "120px" }}>
//          A Healthcare 
//         </h1>
//         <br></br>
//         <h1 className="text-6xl md:text-10xl font-bold text-white"
//         style={{ fontSize: "120px" }}>
//         AI Co-pilot
//         </h1>
        
        
//         <p className=" text-xl md:text-2xl text-gray-300">
//           {/* Empowering technology for a healthier tomorrow */}
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";

export function ImageFold() {
  return (
    <div
      className="relative flex items-center justify-center  min-h-screen  bg-center  pb-8"
      style={{
        backgroundImage: "url('/health_co_pilot_in_blue_2563eb.png')",
      }}
    >
      {/* Overlay (optional, if you want text on top of the image) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center ">
        <h1 className="text-5xl relative z-20 md:text-7xl lg:text-9xl font-bold text-center font-sans tracking-tight text-white"
        // style={{ fontSize: "clamp(2rem, 5vw, 120px)" }}
        >
         A Healthcare 
        </h1>
        <br></br>
        <h1 className="text-5xl relative z-20 md:text-7xl lg:text-9xl font-bold text-center font-sans tracking-tight text-white"
        // style={{ fontSize: "clamp(2rem, 5vw, 120px)" }}
        >
        AI Co-pilot
        </h1>
        
        
        <p className=" text-xl md:text-2xl text-gray-300">
          {/* Empowering technology for a healthier tomorrow */}
        </p>
      </div>
    </div>
  );
}

