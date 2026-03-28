import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, GraduationCap, Briefcase, BrainCircuit, FlaskConical } from "lucide-react";

const cards = [
  {
    icon: BrainCircuit,
    title: "Data Science",
    desc: "Applying statistical methods, data modeling, and visualization techniques to uncover patterns and drive data-informed decisions.",
  },
  {
    icon: FlaskConical,
    title: "ML Trainee",
    desc: "Learning and applying machine learning algorithms, model training, and evaluation to solve real-world prediction problems.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Experienced in analyzing complex datasets using Python, SQL, and modern BI tools to extract meaningful insights.",
  },
  {
    icon: Code2,
    title: "Python Development",
    desc: "Building automation scripts, data pipelines, and web applications with clean, maintainable Python code.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learner",
    desc: "Passionate about staying updated with the latest technologies and data science methodologies.",
  },
  {
    icon: Briefcase,
    title: "Problem Solver",
    desc: "Approaching challenges with analytical thinking and delivering data-driven solutions.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A detail-oriented Data Analyst and Python Developer with a passion for turning data into stories and building impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-300 hover-tilt"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
