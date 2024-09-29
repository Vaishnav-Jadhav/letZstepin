import { useState } from "react"
import'./Animation.css'


export function RowB(props)
{
    

    return(
        <div className="rowContainer bg-white w-100 my-3">
          <div className="m-2">
             <h2 className="text-center p-2 text-info">{props.data.title}</h2>
          </div>
          <div className="d-flex justify-content-around p-3 w-100 m-auto">
              <div>
                  <p className="text-justify fs-5">{props.data.discription}</p>
              </div>
              <div className="rounded p-2 d-flex justify-content-end">
                  <img src={props.data.img} className="w-50 cover-fill rounded-4 shadow"/>
              </div>
          </div>
         
       </div>
    )   
}