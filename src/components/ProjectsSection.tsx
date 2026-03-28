import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Driven Business Intelligence System",
    desc: "Instead of focusing only on analysis, I designed the project around decision support. I integrated data validation, business logic, and automated insight generation so that the system could highlight problems instead of just displaying numbers.",
    tags: ["Python", "Machine Learning", "Power BI", "SQL", "Automation"],
    color: "from-primary/30 to-accent/30",
    featured: true,
  },
  {
    title: "Sales Dashboard Analytics",
    desc: "Interactive dashboard built with Python and Power BI to visualize sales trends, KPIs, and regional performance metrics.",
    tags: ["Python", "Power BI", "SQL"],
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Customer Churn Prediction",
    desc: "Machine learning model to predict customer churn using Scikit-learn with 92% accuracy, deployed as a web application.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Web Scraping Automation",
    desc: "Automated data collection pipeline using BeautifulSoup and Selenium, processing 10K+ records daily with error handling.",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "Expense Tracker App",
    desc: "Full-stack expense tracking application with data visualization, built with Django and Chart.js for personal finance management.",
    tags: ["Django", "JavaScript", "PostgreSQL"],
    color: "from-primary/20 to-accent/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A selection of projects showcasing my skills in data analysis and development.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 glass-card rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300 relative"
          >
            {/* Featured badge */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-body font-medium">
              <Star size={12} className="fill-primary" /> Main Project
            </div>

            <div className="md:flex">
              {/* Gradient side */}
              <div className={`h-48 md:h-auto md:w-2/5 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent md:hidden" />
                <div className="relative z-10 w-20 h-20 rounded-2xl glass-card flex items-center justify-center text-3xl font-display font-bold gradient-text-accent animate-float">
                  AI
                </div>
                {/* Decorative orbs */}
                <div className="absolute top-6 left-6 w-24 h-24 rounded-full bg-primary/20 blur-[60px] animate-pulse-glow" />
                <div className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-accent/20 blur-[60px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>

              <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                <h3 className="font-display font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm md:text-base mb-5 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="glow-button px-5 py-2 rounded-full text-primary-foreground font-body text-xs font-medium flex items-center gap-1.5">
                    <ExternalLink size={14} /> View Project
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} /> Source Code
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover-tilt"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="relative z-10 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-2xl font-display font-bold gradient-text">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} /> Code
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
