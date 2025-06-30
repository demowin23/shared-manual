interface LocalBusiness {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  openingHours: string[];
}

export function generateLocalBusinessSchema(business: LocalBusiness) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.streetAddress,
      "addressLocality": business.address.addressLocality,
      "addressRegion": business.address.addressRegion,
      "postalCode": business.address.postalCode,
      "addressCountry": business.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    },
    "telephone": business.telephone,
    "openingHours": business.openingHours
  };
}

export const defaultLocalBusiness: LocalBusiness = {
  name: "Sổ tay chung cư",
  address: {
    streetAddress: "123 Đường ABC",
    addressLocality: "Quận 1",
    addressRegion: "TP Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN"
  },
  geo: {
    latitude: 10.7756587,
    longitude: 106.7004238
  },
  telephone: "+84-xxx-xxx-xxx",
  openingHours: [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-12:00"
  ]
};

export function generateBreadcrumbSchema(items: Array<{name: string, item: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://dadiland.com${item.item}`
    }))
  };
} 