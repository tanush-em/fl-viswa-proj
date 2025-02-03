import { motion } from "framer-motion";

const InfiniteScrollBanner = () => {
  return (
    <div className="relative w-full overflow-hidden py-4">

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ display: "flex", minWidth: "200%" }}
      >
        <div className="flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className="text-white text-2xl font-semibold "
                >
                  ⚡ 50% Discount   
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
      <div className="text-3xl font-medium flex justify-center items-center">
        <h2>ON ALL TREATMENTS</h2>
      </div>
    </div>
  );
};

export default InfiniteScrollBanner;
