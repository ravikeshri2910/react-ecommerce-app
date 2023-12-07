import React from "react";
import  ReactDOM  from "react-dom";
import Cart from "../Cart/Cart";

const Model = (props) =>{

    const overLay = document.getElementById("overlay")

    return <>
        {ReactDOM.createPortal(<Cart onClickClose = {props.onCartClose}/>, overLay)}
    </>
}

export default Model