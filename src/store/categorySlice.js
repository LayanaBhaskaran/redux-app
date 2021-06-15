import {createSlice} from '@reduxjs/toolkit';

const categorySlice = createSlice(
    {
        name:'category',
        initialState:{showCategory: false,
            categoryData : []},
        reducers:{
            showCategoriesList(state){
                state.showCategory=! state.showCategory;
             },
             saveCategoryList(state,action){
                 state.categoryData=action.payload;
             }


        }
    }

);
export const categoryActions=categorySlice.actions;
export default categorySlice;