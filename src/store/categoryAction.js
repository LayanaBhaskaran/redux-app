

import {categoryActions} from './categorySlice';

export const ShowCategory = () => {
  return async (dispatch) => {
    const fetchCategory = async () => {
      const response = await fetch(
        'https://quiz-f20f8-default-rtdb.firebaseio.com/categories.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
      //console.log(data);
    };

    try {
      const categoryData = await fetchCategory();
console.log(categoryData);
    
    dispatch(categoryActions.saveCategoryList(categoryData));
     
    } catch (error) {
      
    }
  };
};






export default ShowCategory;