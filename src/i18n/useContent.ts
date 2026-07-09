import { content } from './content';
import { useLang } from './LanguageProvider';

export function useContent() {
  return content[useLang().lang];
}
