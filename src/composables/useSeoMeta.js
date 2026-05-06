import { watchEffect } from 'vue'
import { siteConfig } from '@/config/site'

export function useSeoMeta(meta = {}) {
  watchEffect(() => {
    const title = meta.title
      ? `${meta.title} – ${siteConfig.name}`
      : siteConfig.name

    const description = meta.description || siteConfig.description
    const url = meta.url || siteConfig.url
    const ogImage = meta.ogImage || siteConfig.ogImage
    const type = meta.type || 'website'

    // TITLE
    document.title = title

    setMeta('description', description)

    // Open Graph
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:type', type)
    setProperty('og:url', url)
    setProperty('og:image', ogImage)

    // Locale
    setProperty('og:locale', siteConfig.locale)
  })
}

function setMeta(name, content) {
  if (!content) return

  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setProperty(property, content) {
  if (!content) return

  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
