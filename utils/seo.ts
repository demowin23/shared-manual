export interface SeoMeta {
  title: string;
  description: string;
  keywords: string[];
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

export const defaultSeoMeta: SeoMeta = {
  title: 'DADILAND - Thông tin bất động sản toàn quốc',
  description: 'Cập nhật thông tin mới nhất về bất động sản, chung cư, nhà đất tại các tỉnh thành trên toàn quốc. Thông tin chi tiết về giá cả, vị trí, tiện ích.',
  keywords: ['bất động sản', 'chung cư', 'nhà đất', 'mua bán nhà đất', 'cho thuê nhà đất'],
  robots: 'index, follow',
  ogTitle: 'DADILAND - Thông tin bất động sản toàn quốc',
  ogDescription: 'Cập nhật thông tin mới nhất về bất động sản, chung cư, nhà đất tại các tỉnh thành trên toàn quốc',
  ogImage: 'https://dadiland.com/images/logo.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'DADILAND - Thông tin bất động sản toàn quốc',
  twitterDescription: 'Cập nhật thông tin mới nhất về bất động sản, chung cư, nhà đất',
  twitterImage: 'https://dadiland.com/images/logo.png'
};

export function generateMetaTags(meta: Partial<SeoMeta> = {}): any {
  const finalMeta = { ...defaultSeoMeta, ...meta };
  
  return {
    title: finalMeta.title,
    meta: [
      { name: 'description', content: finalMeta.description },
      { name: 'keywords', content: finalMeta.keywords.join(', ') },
      { name: 'robots', content: finalMeta.robots },
      // Open Graph
      { property: 'og:title', content: finalMeta.ogTitle || finalMeta.title },
      { property: 'og:description', content: finalMeta.ogDescription || finalMeta.description },
      { property: 'og:image', content: finalMeta.ogImage },
      { property: 'og:type', content: 'website' },
      // Twitter Card
      { name: 'twitter:card', content: finalMeta.twitterCard },
      { name: 'twitter:title', content: finalMeta.twitterTitle || finalMeta.title },
      { name: 'twitter:description', content: finalMeta.twitterDescription || finalMeta.description },
      { name: 'twitter:image', content: finalMeta.twitterImage }
    ],
    link: [
      finalMeta.canonical ? { rel: 'canonical', href: finalMeta.canonical } : null
    ].filter(Boolean)
  };
} 