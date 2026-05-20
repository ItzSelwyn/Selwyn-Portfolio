#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = __dirname
const distDir = path.join(rootDir, 'dist')

const routes = [
  '/',
  '/insighted',
  '/rapid-100',
  '/metromind',
]

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function preRenderRoutes() {
  console.log('🚀 Starting SSG pre-rendering...')
  
  const { default: express } = await import('express')
  const { default: sirv } = await import('sirv')
  
  const app = express()
  
  // Serve static files
  app.use(sirv(distDir, { dev: false }))
  
  // SPA fallback - serve index.html for any unmatched routes
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
  })
  
  const server = app.listen(9999, async () => {
    console.log('📦 Local server running on http://localhost:9999')
    
    const { default: puppeteer } = await import('puppeteer')
    let browser
    
    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
        ],
      })
      
      for (const route of routes) {
        try {
          const page = await browser.newPage()
          const url = `http://localhost:9999${route}`
          
          console.log(`🌐 Rendering ${route}...`)
          await page.goto(url, { waitUntil: 'networkidle2' })
          
          // Wait for React to update the document head (useDocumentHead hook)
          await delay(1000)
          
          // Wait for meta tags to be populated
          await page.waitForFunction(() => {
            const desc = document.querySelector('meta[name="description"]')
            return desc && desc.content && desc.content.length > 20
          }, { timeout: 5000 }).catch(() => {
            // Continue if metadata doesn't update
          })
          
          const content = await page.content()
          
          let outputPath
          if (route === '/') {
            outputPath = path.join(distDir, 'index.html')
          } else {
            const routePath = path.join(distDir, route)
            fs.mkdirSync(routePath, { recursive: true })
            outputPath = path.join(routePath, 'index.html')
          }
          
          fs.writeFileSync(outputPath, content)
          await page.close()
          
          console.log(`✅ Rendered: ${route}`)
        } catch (error) {
          console.error(`❌ Error rendering ${route}:`, error.message)
        }
      }
      
      await browser.close()
      console.log('✨ Pre-rendering complete!')
      process.exit(0)
    } catch (error) {
      console.error('❌ Build error:', error.message)
      if (browser) await browser.close()
      process.exit(1)
    } finally {
      server.close()
    }
  })
}

if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Run "npm run build" first.')
  process.exit(1)
}

preRenderRoutes().catch(error => {
  console.error('❌ Fatal error:', error.message)
  process.exit(1)
})
