import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from 'framer-motion';

const Grid = () => {
  return (
    <section id="about">
      <h1 className="heading mb-12 mt-24">About <span className="text-purple">Me</span></h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <motion.div
          className="col-span-1 p-6 rounded-lg shadow-lg border border-white/[0.1]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400 font-sans">Who I Am</h2>
          <p className="text-white-200 font-sans">
            Hi, I am Anirudh, the CTO at Unity Books. A passionate Software Engineer and Full Stack Developer with a strong background in AI and ML, driven by curiosity and love for solving complex problems.
          </p>
        </motion.div>
        <motion.div
          className="col-span-1 p-6 rounded-lg shadow-lg border border-white/[0.1]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400 font-sans">My Background</h2>
          <p className="text-white-200 font-sans">
            I have honed my skills in various programming languages and frameworks, excelling in both front-end and back-end development to create seamless, efficient, and scalable applications.
          </p>
        </motion.div>
        <motion.div
          className="col-span-1 p-6 rounded-lg shadow-lg border border-white/[0.1]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-400 font-sans">My Mission</h2>
          <p className="text-white-200 font-sans">
            My mission is to leverage technology to create impactful solutions that drive progress. Committed to continuous learning, I aim to deliver high-quality, reliable software that exceeds expectations.
          </p>
        </motion.div>
      </div>
      <BentoGrid className="w-full my-16">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
