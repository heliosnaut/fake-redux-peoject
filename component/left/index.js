import React from "react";
import { useSelector, useDispatch } from "react-redux";  //useSelector、useDispatch等HooksApi替代connect
import { actions } from "./reducer";

function Left(){
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const changeTabFn = ({target}) =>{
    const {tabName} = target.dataset;
    dispatch(actions.changeTab(tabName));
  }
  return <aside>
    LEFT
    <nav tabName={"USER1"} onClick={ changeTabFn }>
      123
    </nav>
  </aside>
}