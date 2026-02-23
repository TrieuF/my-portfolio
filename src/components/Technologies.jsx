import { DiPython, DiJava, DiHtml5, DiJavascript1, DiCss3 } from "react-icons/di";
import { SiC, SiOracle, SiQlik } from "react-icons/si";
import { RiReactjsLine, RiSvelteLine } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: [0.445, 0.05, 0.55, 0.95],
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-40">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className="text-7xl text-[#A8B9CC]"/>
                </motion.div>

                <motion.div variants={iconVariants(2.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-7xl text-[#007396]"/>
                </motion.div>

                <motion.div variants={iconVariants(1.6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className="text-7xl text-[#3776AB]"/>
                </motion.div>

                <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript1 className="text-7xl text-[#F7DF1E]"/>
                </motion.div>

                <motion.div variants={iconVariants(1.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiHtml5 className="text-7xl text-[#E34F26]"/>
                </motion.div>

                <motion.div variants={iconVariants(2.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiCss3 className="text-7xl text-[#1572B6]"/>
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]"/>
                </motion.div>

                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiSvelteLine className="text-7xl text-[#FF3E00]"/>
                </motion.div>

                <motion.div variants={iconVariants(1.7)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiOracle className="text-7xl text-[#F80000]"/>
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <GrDatabase className="text-7xl text-[#4479A1]"/>
                </motion.div>

                <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiQlik className="text-7xl text-[#009845]"/>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Technologies;