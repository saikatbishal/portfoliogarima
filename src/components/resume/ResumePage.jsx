import React from "react";
import resumeData from "../../utils/resumeData"; // Adjust path based on your project
import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import SkillBadge from "./SkillBadge";
import ListBlock from "./ListBlock";
import AnimatedWrapper from "./AnimatedWrapper";
import ContactSection from "./ContactSection";

export default function ResumePage() {
  const {
    personal,
    professionalSummary,
    softwareSkills,
    experience,
    qualifications,
    achievements,
  } = resumeData;

  // Robust collector: accepts strings, arrays, or nested objects and returns flat unique labels
  const collectSkills = (entry) => {
    if (entry === null || entry === undefined) return [];
    if (typeof entry === "string" || typeof entry === "number")
      return [String(entry)];
    if (Array.isArray(entry)) return entry.flatMap((e) => collectSkills(e));
    if (typeof entry === "object") {
      const out = [];
      // if object is a simple map of labels (e.g., {tools: [...], skills: [...]}) traverse values
      Object.values(entry).forEach((val) => {
        out.push(...collectSkills(val));
      });
      // also try to include a name/title if present
      if (typeof entry.name === "string") out.unshift(entry.name);
      // dedupe while preserving order
      return [...new Set(out.filter(Boolean))];
    }
    return [];
  };

  // Define skill sections with multiple fallback keys to handle various data structures
  const skillSections = [
    {
      title: "IDEs",
      keys: ["ideTools", "IDEs", "ide"],
    },
    {
      title: "Programming Languages",
      keys: ["programmingLanguages", "languages", "programming"],
    },
    {
      title: "API Testing Tools",
      keys: ["apiTools", "apiTesting", "api"],
    },
    {
      title: "API Testing Skills",
      keys: ["apiTestingSkills", "apiSkills"],
    },
    {
      title: "Automation Testing Tools",
      keys: ["automationTestingTools", "automationTools", "automation"],
    },
    {
      title: "Automation Testing Skills",
      keys: ["automationTestingSkills", "automationSkills"],
    },
    {
      title: "Performance Testing",
      keys: ["performanceTesting", "performance", "jmeter"],
    },
    {
      title: "Database Testing",
      keys: ["databaseTesting", "database", "db"],
    },
    {
      title: "Application Testing",
      keys: ["applicationTesting", "application"],
    },
    {
      title: "Testing Types",
      keys: ["testingTypes", "testTypes", "testing"],
    },
    {
      title: "Defect Tracking",
      keys: [
        "defectTracking",
        "defectAndQualityManagement",
        "defects",
        "defectManagement",
      ],
    },
  ];

  // Helper to get skills for a section by trying multiple keys
  const getSkillsForSection = (section) => {
    for (const key of section.keys) {
      const data = softwareSkills[key];
      if (data !== null && data !== undefined) {
        const skills = collectSkills(data);
        if (skills.length > 0) {
          return skills;
        }
      }
    }
    return [];
  };

  return (
    <div className="min-h-screen pb-10 w-full bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Gradients - purely decorative */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 w-full">
        <Header personal={personal} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 px-4 sm:px-6 lg:px-8">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Summary */}
            <section>
              <SectionTitle title="Professional Summary" />
              <AnimatedWrapper>
                <p className="text-lg leading-8 text-slate-300 bg-white/5 p-6 rounded-2xl border border-white/5 shadow-inner text-left">
                  {professionalSummary}
                </p>
              </AnimatedWrapper>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle title="Experience" />
              <div className="space-y-8">
                {experience.map((job, idx) => (
                  <ExperienceCard key={idx} job={job} index={idx} />
                ))}
              </div>
            </section>

            {/* Projects (Placeholder handling) */}
            <section>
              <SectionTitle title="Projects" />
              <AnimatedWrapper>
                <div className="p-6 rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 text-slate-500 italic text-left">
                  Detailed project portfolio available upon request or via
                  GitHub.
                </div>
              </AnimatedWrapper>
            </section>
          </div>

          {/* Right Column (Sidebar style) */}
          <div className="lg:col-span-4 space-y-16">
            {/* Skills */}
            <section>
              <SectionTitle title="Tech Stack" />
              <div className="space-y-10">
                {skillSections.map((section, sectionIdx) => {
                  const skills = getSkillsForSection(section);

                  // Only render sections that have skills
                  if (skills.length === 0) return null;

                  return (
                    <div key={`section-${sectionIdx}`}>
                      <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                        {section.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                          <SkillBadge
                            key={`${section.keys[0]}-${idx}`}
                            skill={skill}
                            index={idx}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Qualifications */}
            <section>
              <SectionTitle title="Education" />
              <ListBlock items={qualifications} />
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle title="Achievements" />
              <ListBlock items={achievements} />
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 sm:px-6 lg:px-8 mt-16">
          <SectionTitle title="Contact Me" />
          <ContactSection personal={personal} />
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-8 border-t border-slate-800 text-left text-slate-500 px-4 sm:px-6 lg:px-8"
        >
          <p>Designed & Built with React, Tailwind, and Framer Motion</p>
          <a
            href="/GarimaSanghai_QA_Experience_4.5yrs.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Download PDF Resume
          </a>
        </motion.footer>
      </main>
    </div>
  );
}
