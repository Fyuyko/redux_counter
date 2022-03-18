import { useSelector } from "react-redux";




const Counter = () => {
   const counter = useSelector(state => state.counter);
   console.log(counter);   

   return (
      <>
         <div className='counter'>{counter}</div>
      </>      
   );
};

export default Counter;