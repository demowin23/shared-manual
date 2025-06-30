import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  // Create a new sitemap stream
  const sitemap = new SitemapStream({
    hostname: 'https://dadiland.com'
  })

  // Add static routes
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.3 })
  
  // Add dynamic routes for real estate categories
  const categories = [
    { url: '/du-an/431-so-tay-du-an', priority: 0.9 },
    { url: '/du-an/464-so-tay-nha-dat', priority: 0.9 },
    { url: '/du-an/465-nha-dat-ban', priority: 0.8 },
    { url: '/du-an/466-nha-dat-cho-thue', priority: 0.8 },
    { url: '/du-an/467-kien-thuc', priority: 0.7 }
  ]

  for (const category of categories) {
    sitemap.write({
      url: category.url,
      changefreq: 'weekly',
      priority: category.priority
    })
  }

  // Add regional real estate pages
  const regions = [
    // Hanoi districts
    { url: '/du-an/127-du-an-ha-noi', priority: 0.8 },
    { url: '/du-an/432-quan-nam-tu-liem', priority: 0.7 },
    { url: '/du-an/433-quan-bac-tu-liem', priority: 0.7 },
    // ... Add all other districts
    
    // HCMC districts
    { url: '/du-an/128-du-an-sai-gon', priority: 0.8 },
    { url: '/du-an/109-quan-1-1', priority: 0.7 },
    { url: '/du-an/110-quan-2', priority: 0.7 },
    // ... Add all other districts
  ]

  for (const region of regions) {
    sitemap.write({
      url: region.url,
      changefreq: 'weekly',
      priority: region.priority
    })
  }

  sitemap.end()

  return streamToPromise(sitemap)
}) 