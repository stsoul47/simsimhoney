import {useDispatch, useSelector} from "react-redux";
import { RootState } from '@store/rootReducer';
import React, {useEffect} from "react";
import {testSettings} from "@store/index";
import './testPages.scss';

function TestPages() {
  const dispatch = useDispatch();
  const test = useSelector((state: RootState)=> state.testRedux.check);

  useEffect(()=>{
    console.log("state check", test);
  },[test]);

  const changeState = () => {
    dispatch(testSettings(!test));
  }

  return (
    <div>
      <p className="test-font">{test.toString()}</p>
      <button onClick={changeState}>상태 변경</button>
    </div>
  )
}
export default TestPages;