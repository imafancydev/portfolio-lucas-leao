import { motion } from "framer-motion";
import { Tailwind } from "../../public/assets/TailwindIcon";
export const ContainerCards = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.02,
            delayChildren: 0.01,
          },
        },
      }}
      className="
      flex flex-wrap justify-center items-center
      gap-4 md:gap-[1.5625rem]
    "
    >
      {
        <motion.li
          whileHover={{ scale: 1.1 }}
          variants={{
            hidden: { rotate: 70, opacity: 0 },
            show: { rotate: 0, opacity: 1 },
          }}
          className="
      text-center relative bg-gray-200 shadow-md rounded-3xl transition-all duration-500 flex justify-center items-center group overflow-hidden z-10 w-24 md:w-[8.625rem] aspect-[1/1.1] cursor-pointer"
        >
          <Tailwind />
          <span
            className="
            text-zinc-500 cursor-pointer transition-all duration-500 absolute md:-left-10 bottom-4 md:group-hover:left-9 text-md md:text-base font-bold md:opacity-0 md:group-hover:opacity-100"
          >
            Tailwind
          </span>
        </motion.li>
      }
    </motion.ul>
  );
};
