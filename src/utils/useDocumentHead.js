import { useEffect } from 'react'
import { getMetadata, BASE_URL_EXPORT } from '../config/metadata'
import {
  generateWebsiteSchema,
  generatePersonSchema,
  getProjectSchema,
} from './schemaGenerator'

/**
 * useDocumentHead - Custom hook to manage document head metadata
 * Updates title, meta tags, canonical URL, OG tags, and schema.org on each page
 *
 * Usage:
 *   useDocumentHead('home')
 *   useDocumentHead('insighted')
 */
export const useDocumentHead = (pageType = 'home') => {
  useEffect(() => {
    const metadata = getMetadata(pageType)

    // Update title
    document.title = metadata.title

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = metadata.description

    // Update or create keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = metadata.keywords

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = metadata.canonical

    // Update Open Graph tags
    updateOrCreateMetaTag('og:url', metadata.ogUrl, 'property')
    updateOrCreateMetaTag('og:title', metadata.ogTitle, 'property')
    updateOrCreateMetaTag('og:description', metadata.ogDescription, 'property')
    updateOrCreateMetaTag('og:image', metadata.ogImage, 'property')

    // Update Twitter Card tags
    updateOrCreateMetaTag('twitter:url', metadata.ogUrl, 'name')
    updateOrCreateMetaTag('twitter:title', metadata.twitterTitle, 'name')
    updateOrCreateMetaTag('twitter:description', metadata.twitterDescription, 'name')
    updateOrCreateMetaTag('twitter:image', metadata.ogImage, 'name')

    // Update or remove schema.org scripts
    updateSchemaScripts(pageType)

    // Log for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ Updated head tags for page: ${pageType}`)
      console.log(`   Title: ${metadata.title}`)
      console.log(`   Canonical: ${metadata.canonical}`)
    }
  }, [pageType])
}

/**
 * Helper function to update or create meta tags
 */
function updateOrCreateMetaTag(name, content, attribute = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.content = content
}

/**
 * Helper function to update schema.org JSON-LD scripts
 */
function updateSchemaScripts(pageType) {
  // Remove existing schema scripts (but keep the base ones)
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]:not([data-base="true"])'
  )
  existingScripts.forEach((script) => script.remove())

  // Add website schema (always present)
  addSchemaScript(generateWebsiteSchema(), 'base')

  // Add person schema (always present)
  addSchemaScript(generatePersonSchema(), 'base')

  // Add project schema if on a project page
  if (pageType !== 'home' && pageType !== 'notfound') {
    const projectSchema = getProjectSchema(pageType)
    if (projectSchema) {
      addSchemaScript(projectSchema)
    }
  }
}

/**
 * Helper function to add a schema script to the document
 */
function addSchemaScript(schema, dataBase = null) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  if (dataBase) script.setAttribute('data-base', 'true')
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}
