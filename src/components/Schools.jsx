import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const FeedbackCard = ({ index, school, year, degree, major, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[470px] w-full"
  >
    <p className="text-white font-black text-[20px]">{school}</p>

    <div className="mt-1">
      <div className="mt-2 flex justify-between items-center">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient"></span> {degree} {major}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{year}</p>
        </div>

        <img
          src={image}
          alt={`school`}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Schools = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My education so far</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((school, index) => (
          <FeedbackCard key={school.year} index={index} {...school} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Schools, "");
