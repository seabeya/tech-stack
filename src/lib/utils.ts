import { DOCS } from '@/consts';

export function getDocsInfo(key: string) {
  const doc = DOCS[key as keyof typeof DOCS];
  if (doc) {
    return doc;
  }
}
