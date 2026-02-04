import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitenin gerçek ve ana adresi
  const baseUrl = 'https://www.petayapi.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Ana sayfa olduğu için en yüksek öncelik
    },
    /* İleride yeni sayfalar eklersen (örn: /projeler), 
       aşağıdaki bloğu aktif edebilirsin:
    */
    /*
    {
      url: `${baseUrl}/projeler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
  ]
}