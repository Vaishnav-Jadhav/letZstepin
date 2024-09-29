import { useState } from "react";
import'../Animation.css'


export function Location()
{

    let[data]=useState({
        title:"Location Tracking",
        img:"/assets/location.jpg",
        discription:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat, est odit numquam aliquid esse consequuntur cum voluptate, dolor assumenda accusantium voluptatibus minima illo, adipisci molestias illum reprehenderit voluptatem maxime!",
        btnTitle:"Read more"
    })

    return(
        <>
         <div className="rowContainer w-100 bg-light p-5">
           <div className="w-75 m-auto d-flex " >
                <div>
                    <img src={data.img} width={500}  className="rounded-4 shadow-lg"/>
                </div>
                <div className="ms-5">
                    <h2 className="fw-bold">{data.title}</h2>
                    <p className="fs-5">{data.discription}</p>
                    <button className="btn btn-outline-success">{data.btnTitle}</button>
                </div>
                
           </div>
         </div>
        </>
    )
}