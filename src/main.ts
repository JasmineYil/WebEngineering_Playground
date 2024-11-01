import { toggleComments } from './modules/showHideComments';
import { addComment } from './modules/addComment';
import { getBearData } from './modules/fetchBearData';

window.onload = () => {
  console.log('Initializing Application ...');
  toggleComments();
  addComment();
  getBearData().catch((error) => {
    console.error('Error in getBearData:', error);
  });
};
