import fs from 'fs/promises'
import path from 'path'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js'

async function extract(pdfPath, outPath) {
  const data = await fs.readFile(pdfPath)
  const loadingTask = pdfjsLib.getDocument({ data })
  const pdf = await loadingTask.promise
  let fullText = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const strings = content.items.map(item => item.str)
    fullText += strings.join(' ') + '\n\n'
  }
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, JSON.stringify({ text: fullText }, null, 2), 'utf8')
  console.log('Wrote', outPath)
}

const repoRoot = path.resolve(new URL(import.meta.url).pathname.replace(/^\//, '').replace('scripts/extract-resume.mjs',''))
// The public PDF filename discovered earlier
const pdfFile = path.join(repoRoot, 'public', 'GarimaSanghai_QA_Experience_4.5yrs.pdf')
const outFile = path.join(repoRoot, 'src', 'utils', 'resumeContent.json')

extract(pdfFile, outFile).catch(err => {
  console.error(err)
  process.exit(1)
})
