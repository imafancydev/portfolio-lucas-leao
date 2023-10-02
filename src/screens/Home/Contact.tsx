import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

export const Contact = () => {
  return (
    <motion.section
      className="cursor-pointer px-5 pt-24 pb-24 md:pt-24 md:pb-48 md:px-10 flex flex-col justify-center items-center gap-10 bg-gray-200"
      id="contato"
    >
      <strong className="text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 font-bold md:text-3xl">
        Meu email, fale comigo!
      </strong>
      <AnimatedText text="lucasleaocontact@gmail.com" />
    </motion.section>
  );
};
