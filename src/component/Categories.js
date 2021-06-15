import {useSelector} from 'react-dom';

const Categories=()=>{
    const show=useSelector(state=>state.category. saveCategoryList);
return(
    <ul>{show}</ul>
);
};
export default Categories;

