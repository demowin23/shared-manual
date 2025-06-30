interface RealEstateListing {
  name: string;
  description: string;
  price?: number;
  priceCurrency?: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  image: string[];
  numberOfRooms?: number;
  floorSize?: {
    value: number;
    unitCode: string; // Example: SQM for square meters
  };
}

export function generateRealEstateSchema(listing: RealEstateListing) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": listing.name,
    "description": listing.description,
    "image": listing.image,
    ...(listing.price && {
      "price": listing.price,
      "priceCurrency": listing.priceCurrency || "VND"
    }),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": listing.address.addressLocality,
      "addressRegion": listing.address.addressRegion,
      "addressCountry": listing.address.addressCountry,
      ...(listing.address.streetAddress && {
        "streetAddress": listing.address.streetAddress
      }),
      ...(listing.address.postalCode && {
        "postalCode": listing.address.postalCode
      })
    },
    ...(listing.numberOfRooms && {
      "numberOfRooms": listing.numberOfRooms
    }),
    ...(listing.floorSize && {
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": listing.floorSize.value,
        "unitCode": listing.floorSize.unitCode
      }
    })
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sổ tay chung cư",
    "url": "https://dadiland.com",
    "logo": "https://dadiland.com/images/logo.png",
    "sameAs": [
      "https://facebook.com/dadiland",
      "https://twitter.com/dadiland",
      "https://youtube.com/dadiland"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-xxx-xxx-xxx",
      "contactType": "customer service",
      "areaServed": "VN",
      "availableLanguage": ["Vietnamese"]
    }
  };
} 