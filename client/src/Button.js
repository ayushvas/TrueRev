import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function ButtonLanding(props){
    return(
        <Button style={{margin: "10px"}} variant={props.variant} size={props.size}><i class={props.icon}></i>{props.content}</Button>
    );
}

export default ButtonLanding;