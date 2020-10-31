import { findByLabelText } from '@testing-library/react'
import React from 'react'

let styles = {

    "prodWrapper":{
        display: "flex",
        flexDirection: "column",
        padding:"0px",
        boxShadow: "rgb(204, 204, 204) 6px 11px 10px 2px,-3px -2px 10px #ccc",
        margin:"10px",
        borderRadius:"10px"
    },

    "prodDesc":{
        display: "flex",
        flexDirection: "column",
        margin:"5px",
        padding:"5px",
        prodname:{
            fontSize:"12px",
            fontWeight:600,
            minHeight:"30px"
        },
        prodPrice:{
            fontSize:"18px",
            fontWeight:800,
            color:"#484747"
        }
    },

    "prodimgmain":{
        height:"290px",
        width:"100%",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
    }


}

export default function Product(props){

    if(props.productcardstylesoverride){
        styles = props.productcardstylesoverride;
    }

    return <>
    <div className={props.cardcustomclass} style={styles.prodWrapper} >
        <img className={props.productimgclasscustom?props.productimgclasscustom:"prductimg"} src={props.primaryImage.src} alt={props.primaryImage.alt} style={styles.prodimgmain} />
        <div className={props.productdescclasscustom?props.productdescclasscustom:"prductdesc"} style={styles.prodDesc}>
            <p className="prodName" style={styles.prodDesc.prodname}>{props.name}</p>
            <p className="prodPrice" style={styles.prodDesc.prodPrice}>{props.price?props.price:"Not Available"}</p>
            {props.children}
        </div> 
    </div>
    </>

};