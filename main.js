import { toggleComments } from './modules/showHideComments.js';
import { addComment } from './modules/addComment.js';
import { getBearData } from './modules/fetchBearData.js';


window.onload = () => {
  console.log('Initializing Application ...');
  toggleComments();
  addComment();
  getBearData();
};
