import { useEffect} from 'react';
import  '../src/component/Category.css';

//import {fetchCategories} from '../store/categoryAction';
import {useDispatch,useSelector} from 'react-redux';
import {ShowCategory} from './store/categoryAction';


function App() {
 const show=useSelector((state)=>state.category.categoryData);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(ShowCategory());
  },[dispatch]);

const categoryList=[];

for(const key in show){
  categoryList.push({
    id:show[key].id,
    name:show[key].name,
  });
 
}

   
  return (
    //<div className='expense-item'>
    <div>
      
{categoryList.map((data)=>
<h4 className='expense-item__description '>
  {data.name}
  </h4>
)}
    </div>
  );
};

export default App;
