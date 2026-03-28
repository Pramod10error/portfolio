import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Data Analysis",
    skills: ["Python (Pandas, NumPy)", "SQL", "Excel"],
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Model Building", "Data Preprocessing"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jupyter Notebook", "VS Code", "MySQL"],
  },
];

const tools = [
  "Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "Scikit-learn", "Power BI", "Tableau", "Excel", "Git", "MySQL",
  "PostgreSQL", "Jupyter", "VS Code", "Django",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
  {skillCategories.map((category, i) => (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="glass-card p-6 rounded-xl hover:border-primary/40 transition-all"
    >
      <h3 className="text-lg font-bold mb-3 gradient-text">
        {category.title}
      </h3>

      <ul className="space-y-2">
        {category.skills.map((skill, idx) => (
          <li
            key={idx}
            className="text-sm text-foreground/80 font-body"
          >
            • {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>

        {/* Tool Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
              className="glass-card px-4 py-2 rounded-full text-xs font-body text-foreground/80 hover:border-primary/40 hover:text-primary transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
