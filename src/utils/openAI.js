import OpenAI from 'openai';
// import OpenAI from 'https://deno.land/x/openai@v4.24.7/mod.ts';
import { OPENAIKEY} from './constants';

const openai = new OpenAI({
  apiKey: OPENAIKEY,
  dangerouslyAllowBrowser: true
  // This is the default and can be omitted
});

export default openai;