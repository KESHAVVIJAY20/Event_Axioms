// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function NotFound() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-purple-600 via-pink-500 to-purple-800 text-white px-5">
      
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-2xl max-w-lg w-full"
//       >
//         {/* 404 Number */}
//         <motion.h1
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-7xl font-extrabold tracking-widest"
//         >
//           404
//         </motion.h1>

//         {/* Message */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-4 text-lg text-gray-200"
//         >
//           Oops! This event page got lost in the celebration 🎉
//         </motion.p>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9 }}
//         >
//           <Link
//             to="/"
//             className="inline-block mt-8 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-purple-100 transition duration-300 shadow-lg"
//           >
//             Back to Home
//           </Link>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  // ⏳ Auto redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-linear-to-br from-gray-600  to-gray-500 text-white px-5 overflow-hidden">
      
      {/* 🔥 Background Glow */}
      <div className="absolute w-72 h-72 bg-gray-400 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-gray-400 opacity-30 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-2xl max-w-lg w-full"
      >
        {/* 404 */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-7xl font-extrabold tracking-widest animate-bounce"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-gray-200"
        >
          This event page didn’t show up… redirecting you home 🎉
        </motion.p>

        {/* ⏳ Loader */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center mt-6"
        >
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </motion.div>

        {/* Button (manual option) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link
            to="/"
            className="inline-block mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-full hover:bg-purple-100 transition duration-300 shadow-lg"
          >
            Go Now
          </Link>
        </motion.div>

        {/* Timer text */}
        <p className="text-sm mt-4 text-gray-300">
          Redirecting in 10 seconds...
        </p>
      </motion.div>
    </div>
  );
}