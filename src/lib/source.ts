import { docs } from '@/.source';
import { DOCS } from '@/consts';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      return;
    }

    const doc = DOCS[icon as keyof typeof DOCS];
    if (doc === undefined) {
      return;
    }

    return createElement(doc.icon);
  },
});
