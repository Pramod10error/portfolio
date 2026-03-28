import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
  {
    icon: Github,
    link: "https://github.com/Pramod10error",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/pramod-pradhan-6b2a24367",
  },
  {
    icon: Mail,
    link: "mailto:pramadapradhan8@gmail.com",
  },
];
return (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

      <p className="text-muted-foreground font-body text-sm">
        © 2024 Pramod Pradhan. All rights reserved.
      </p>

      <div className="flex gap-4">
        {socialLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center"
              title={`Visit ${item.icon.name}`}
            >
             <Icon size={16} />
            </a>
          );
        })}
      </div>

    </div>
  </footer>
);
}
     


export default Footer;
