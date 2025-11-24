import React from "react";
import { motion } from "framer-motion";
import resumeData from "../../utils/resumeData"; // Adjust path based on your project
import Header from "./Header";
import SectionTitle from "./SectionTitle";
import ExperienceCard from "./ExperienceCard";
import SkillBadge from "./SkillBadge";
import ListBlock from "./ListBlock";
import AnimatedWrapper from "./AnimatedWrapper";

export default function ResumePage() {
  const {
    personal,
    professionalSummary,
    softwareSkills,
    experience,
    qualifications,
    achievements,
  } = resumeData;

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Gradients - purely decorative */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 w-full">
        <Header personal={personal} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-12">
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
              <div className="space-y-4">
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
          <div className="lg:col-span-4 space-y-12">
            {/* Skills */}
            <section>
              <SectionTitle title="Tech Stack" />
              <div className="space-y-6">
                {/* IDE Tools */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    IDEs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.ideTools.map((skill, idx) => (
                      <SkillBadge
                        key={`ide-${idx}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                {/* Programming Languages */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.programmingLanguages.map((skill, idx) => (
                      <SkillBadge
                        key={`prog-${idx}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                {/* API Testing Tools */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    API Testing Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.apiTools.map((skill, idx) => (
                      <SkillBadge
                        key={`api-${idx}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                {/* Automation Testing */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    Automation Testing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.automationTesting.map((skill, idx) => (
                      <SkillBadge
                        key={`auto-${idx}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                {/* Defect Tracking */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    Defect Tracking
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.defectTracking.map((skill, idx) => (
                      <SkillBadge
                        key={`defect-${idx}`}
                        skill={skill}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

                {/* Performance Testing */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-300 mb-3 text-left">
                    Performance Testing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {softwareSkills.jmeter.map((skill, idx) => (
                      <SkillBadge
                        key={`perf-${idx}`}
                        skill={`JMeter (${skill})`}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
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
