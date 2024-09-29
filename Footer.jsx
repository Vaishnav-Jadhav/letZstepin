import { useState } from "react"
import {Link} from 'react-router-dom'


export function Footer()
{
    const[cities]=useState(["Mumbai","Pune","Hyderabad","Delhi","Nagpur"])

    const[sell]=useState(["Become a contributor","Contributor help page","Contributor contract","Contributor mobile app"])

    const[languages]=useState(["English","Hindi","Marathi","Telugu","Japnese"])

    const[classNames]=useState(["bi bi-facebook","bi bi-instagram","bi bi-twitter","bi bi-twitter-x","bi bi-telegram","bi bi-youtube"])

    return(
        <footer className="w-100 bg-black pb-4">
            <div className="bg-success w-100 p-1 text-white">
                <h2 className="text-center">378,068,644 Property photos, 360° panoramic images, vectors and videos</h2>
            </div>
            <div className="my-3 d-flex justify-content-center">
                <img src="/assets/brandLogo.png" height={50} />
            </div>
            <div className="w-100 text-light py-5 row">
               <div className="col-3 text-center">
                   <h3>Get great features with your free account</h3>
                   <p>Create your free account</p>
                   <Link to='signin'><button className="btn btn-outline-success">create an account</button></Link>
               </div>
              <div className="text-white col-3 text-center">
                  <h5 className="fw-bold">Cities</h5>
                  <ul className="list-unstyled">
                      {
                          cities.map(value=>
                              <li key={value}>{value}</li>
                          )
                      }
                  </ul>
              </div>
              <div className="text-white col-3">
                  <h5 className="fw-bold">Sell your content</h5>
                  <ul className="list-unstyled">
                      {
                        sell.map((value,index)=>
                        <li key={index}>{value}</li>)
                      }
                  </ul>
              </div>
              <div className="text-white col-2">
                      <h3>Select Language</h3>
                      <div className="input-group">
                            <button className="btn btn-success"><span className="bi bi-globe2"></span></button>
                            <select className="form-select w-50">
                                {
                                    languages.map((value,index)=>
                                    <option key={index}>{value}</option>)
                                }
                            </select>
                      </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
                {
                    classNames.map((value,index)=>
                    <button className="btn btn-outline-black text-white border-1 mx-1 fs-4"><span className={value}></span></button>)
                }
            </div>
            
        </footer>
    )
}