import { useDispatch } from "react-redux";

import {inc, dec, res} from '../actions/actions';

const Buttons = () => {
   const dispatch = useDispatch();

   return (
      <>
         <button className='button' onClick={() => dispatch(inc())}>inc</button>
         <button className='button' onClick={() => dispatch(dec())}>dec</button>
         <button className='button' onClick={() => dispatch(res())}>res</button>
      </>     
   )
}

export default Buttons;