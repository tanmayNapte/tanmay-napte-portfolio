import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Smart Shared Expense Tracker",
      description:
        "A backend-focused group expense tracking system inspired by real-world shared finance problems. The application manages users, groups, expenses, and settlements while ensuring balance consistency across transactions. Built to handle edge cases like invalid settlements and duplicate entries, this project reflects real backend decision-making rather than simple CRUD. This project is still evolving as I explore better validation and scaling approaches, such as optimizing balance recalculation logic and improving database queries as group size grows.",

      tech: ["Python", "Flask", "SQLAlchemy", "PostgreSQL"],
      image: "/images/expense-tracker-preview.png",
      liveLink: "https://github.com/tanmayNapte/Smart-shared-expence-tracker",
      liveDemo: "https://smart-shared-expence-tracker.onrender.com",
      highlights: [
        "Group-based expense and settlement management",
        "Automatic balance calculation with validations",
        "Handled edge cases like self-pay and duplicate settlements",
        "Login-protected routes and role-based checks",
      ],
    },

    {
      title: "Student Management System",
      description:
        "A backend-oriented web application for managing student records and attendance. The system focuses on authentication, protected routes, and structured CRUD operations with a relational database. Built to understand how real backend flows connect forms, business logic, and persistent data.",
      tech: ["Python", "Flask", "SQL", "HTML", "CSS"],
      image: "/images/student-management-preview.png",
      liveLink: "https://github.com/tanmayNapte/Student-Management-System",
      liveDemo: "https://student-management-system-xed5.onrender.com",
      highlights: [
        "User authentication with protected routes",
        "Student record and attendance management",
        "Relational database handling",
        "Clean separation of backend logic",
      ],
    },

    {
      title: "Task Management System",
      description:
        "A Django-based task management application built to understand Django’s request–response cycle and ORM abstraction. The project implements session-based authentication and standard task operations while maintaining a clean and structured backend flow.",
      tech: ["Python", "Django", "SQLite", "HTML", "CSS", "Bootstrap"],
      image: "/images/task-manager-preview.png",
      liveLink: "https://github.com/tanmayNapte/Task-Management-System",
      highlights: [
        "Session-based authentication",
        "Task creation, update, and deletion",
        "Hands-on use of Django ORM",
        "Structured backend views and models",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p>|Focused on backend systems, data consistency, and real-world problem solving.</p>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">
                {activeProject + 1}/{projects.length}
              </div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20"
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3
                    className={`font-medium text-sm mb-1 ${
                      activeProject === index ? "text-light" : "text-muted"
                    }`}
                  >
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div
            className="hidden md:block md:col-span-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index
                    ? "border-opacity-100"
                    : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <h3
                  className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}
                >
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {projects[activeProject].title}
              </h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  KEY HIGHLIGHTS
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">
                  TECHNOLOGIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end gap-4">
                  {/* VIEW PROJECT */}
                  <a
                    href={projects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    SOURCE CODE
                    <svg
                      className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {/* LIVE DEMO */}
                  <a
                    href={projects[activeProject].liveDemo} // 👈 paste live demo URL in project data
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    LIVE DEMO
                    <svg
                      className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M14 4h6m0 0v6m0-6L10 14M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
