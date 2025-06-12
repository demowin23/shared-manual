interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

const CDN_URL = 'https://cdn.sotaychungcu.com';

export function optimizeImage(path: string, options: ImageOptimizationOptions = {}) {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  let optimizedUrl = `${CDN_URL}${path}?f=${format}&q=${quality}`;
  
  if (width) {
    optimizedUrl += `&w=${width}`;
  }
  
  if (height) {
    optimizedUrl += `&h=${height}`;
  }

  return optimizedUrl;
}

export function getLazyLoadingAttributes(path: string, options: ImageOptimizationOptions = {}) {
  const optimizedUrl = optimizeImage(path, options);
  const thumbnailUrl = optimizeImage(path, {
    ...options,
    width: Math.floor((options.width || 0) / 10),
    height: Math.floor((options.height || 0) / 10),
    quality: 10
  });

  return {
    src: optimizedUrl,
    loading: 'lazy',
    'data-src': optimizedUrl,
    'data-srcset': `${optimizedUrl} 1x, ${optimizeImage(path, { ...options, width: (options.width || 0) * 2 })} 2x`,
    style: `background-image: url(${thumbnailUrl}); background-size: cover;`
  };
}

export const imagePresets = {
  thumbnail: {
    width: 200,
    height: 200,
    quality: 80,
    format: 'webp' as const
  },
  preview: {
    width: 400,
    height: 300,
    quality: 85,
    format: 'webp' as const
  },
  full: {
    quality: 90,
    format: 'webp' as const
  }
}; 