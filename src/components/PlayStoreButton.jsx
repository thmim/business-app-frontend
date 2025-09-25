// import React from 'react';

// const PlayStoreButton = () => {
//     const size = "md"
//     return (
//         <div className='flex items-center'>
//             <a
//     href="#"
//     className={`inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white ${
//       size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"
//     }`}
//   >
//     Google Play
//   </a>
//   <div>
//     <p className='font-semibold text-xl'>Google Play</p>
//     <p>Download on the</p>
//   </div>
//         </div>
//     );
// };

// export default PlayStoreButton;
import React from 'react';
import playstore from '../assets/googleplay.png'
import appstore from '../assets/applestor.png'
const PlayStoreButton = () => {
    return (
        <div className='flex items-center gap-3'>
            <div className=''>
                <img className='w-34 h-12' src={playstore} alt="Playstore button" />
            </div>
            <div className=''>
                <img className='w-34 h-12' src={appstore} alt="" />
            </div>
            
        </div>
    );
};

export default PlayStoreButton;