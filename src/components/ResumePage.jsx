import React from 'react'
import { motion } from 'framer-motion'
import resume from '../utils/resumeData'

const sectionVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
}

export default function ResumePage() {
  const { personal, professionalSummary, softwareSkills, experience, qualifications, achievements } = resume

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg shadow-sm">
      <motion.header
        className="flex items-center gap-6 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <img src={personal.image} alt={personal.name} className="w-28 h-28 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700" />
        <div>
          <h1 className="text-2xl font-semibold">{personal.name}</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">{personal.title}</p>
          <p className="text-sm mt-2">
            <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a> • {personal.phone}
          </p>
          <p className="text-sm mt-1">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          </p>
        </div>
      </motion.header>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Professional Summary</h2>
        <p className="text-sm leading-relaxed">{professionalSummary}</p>
      </motion.section>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Professional Experience</h2>
        <div className="space-y-4">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              className="p-4 border rounded bg-slate-50 dark:bg-slate-800"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{job.company}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{job.title} — {job.location}</p>
                </div>
                <div className="text-sm text-slate-500">{job.period}</div>
              </div>
              <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Personal Projects</h2>
        <p className="text-sm text-slate-600">No specific personal projects were listed in the resume. Add project details in <code>src/utils/resumeData.js</code> to display them here.</p>
      </motion.section>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            ...softwareSkills.defectTracking,
            ...softwareSkills.apiTools,
            ...softwareSkills.programmingLanguages,
            ...softwareSkills.automationTesting,
            ...softwareSkills.ideTools,
            ...softwareSkills.jmeter,
          ].map((s, i) => (
            <motion.span
              key={i}
              className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full border"
              whileHover={{ scale: 1.05 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Qualifications</h2>
        <ul className="text-sm list-disc list-inside">
          {qualifications.map((q, i) => <li key={i}>{q}</li>)}
        </ul>
      </motion.section>

      <motion.section className="mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <h2 className="text-lg font-medium mb-2">Achievements</h2>
        <ul className="text-sm list-disc list-inside">
          {achievements.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </motion.section>

      <motion.footer className="border-t pt-4 text-sm text-slate-600 dark:text-slate-300" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
        <div>Resume PDF: <a href="/GarimaSanghai_QA_Experience_4.5yrs.pdf" target="_blank" rel="noreferrer" className="underline">Download</a></div>
      </motion.footer>
    </main>
  )
}
