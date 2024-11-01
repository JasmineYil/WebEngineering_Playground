// Importing TypeScript files directly - Necessary for module resolution during bundling
// @ts-expect-error: Module resolution for TypeScript files (.ts)
import { toggleComments } from './modules/showHideComments.ts'; // @ts-expect-error: Module resolution for TypeScript files (.ts)
import { addComment } from './modules/addComment.ts'; // @ts-expect-error: Module resolution for TypeScript files (.ts)
import { getBearData } from './modules/fetchBearData.ts';

window.onload = () => {
  console.log('Initializing Application ...');
  toggleComments();
  addComment();
  getBearData().catch((error) => {
    console.error('Error in getBearData:', error);
  });
};
