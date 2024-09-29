import { useState } from "react"
import'./Animation.css'


export function RowC(props)
{  
    
    return (
        <div className="rowContainer bg-white w-100 my-3">
            <div className="m-3">
                    <h2 className="text-center p-2 text-black-50">{props.data.title}</h2>
            </div>
            <div className="d-flex justify-content-between p-3 w-100">
                <div>
                    <p className="text-justify fs-5">{props.data.discriptionA}</p>
                </div>
                <div className="rounded p-2 d-flex justify-content-center">
                    <img src={props.data.img} className="w-75 rounded-4 shadow"/>
                </div>
                <div>
                    <p className="text-justify fs-5">{props.data.discriptionB}</p>
                </div>
            </div>
        </div>
    )
}