import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const h = await headers()
  const host = h?.get('x-forwarded-host') ?? h?.get('host')
  const baseUrl = host ? `https://${host}` : 'https://www.petayapi.com'
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: `${baseUrl}/sitemap.xml` }
}
