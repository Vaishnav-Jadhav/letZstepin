import { useState } from "react";
import { RowA } from "../RowA";
import { RowB } from "../RowB";
import { RowC } from "../RowC";


export function Work()
{
    const[rowData]=useState(
        {
            title:"Our tailored Services for Non-Existing Properties",
            discription:"LetzStepIn pioneers the art of transforming visionary concepts into immersive vivid realities accessible to all—anytime, everywhere. Leveraging cutting-edge technology, our expertise encompasses virtual staging, renovation, and crafting of fully immersive 360° CGI show homes and properties. Our commitment is to deliver hyper-realistic visual experiences, inviting everyone to seamlessly step into non-existing spaces with unparalleled realism.",
            img:"/assets/rawImg.jpg"
        })

    const[rowDataB]=useState(
        {
            title:"360° Digital Staging",
            discription:"Step into the pinnacle of refinement and sophistication with LetzStepIn's exquisite 360° Digital Staging Service—an unrivaled symphony of opulence and innovation in property enhancement. Embark on a captivating 72-hour odyssey, immersing yourself in the seamless fusion of avant-garde technology and artistic brilliance as we infuse unparalleled vitality into your space. Wave goodbye to the expense of renovations.",
            img:"/assets/rawImg3.jpg"
        }
    )

    const[rowDataC]=useState(
        {
            title:"Luxury Virtual Staging",
            discriptionA:"Enter a new era of property excellence with our pioneering 360° CGI solutions. Seamlessly blending non-existent spaces, we create a mesmerizingly authentic experience, ensuring unparalleled allure and satisfaction for your clients. Bid farewell to costly show homes and static models—our immersive 360° experience is available anytime, anywhere, on any device. Amplify brand impact, streamline sales, and erase post-construction uncertainties effortlessly. Our expert Digital CGI team crafts tailored, interactive 360° walkthroughs, unveiling your project's genuine potential",
            img:"/assets/rawImg4.jpg",
            discriptionB:"Our virtuosity in virtual staging meticulously crafts an opulent panorama of lifelike furniture and fittings, all meticulously curated from a solitary 360° photo. Bid adieu to the extravagance of physical or animated staging. Our all-encompassing, bespoke service meticulously tailors a fully-furnished masterpiece—a testament to bespoke elegance and unmatched allure, meticulously designed to transform your property into an enchanting oasis of lavish living"
        })


    return(
         <div>
            <div className="w-100 p-4 bg-light">
                <RowA  data={rowData}/>
                <RowC data={rowDataC}/>
                <RowB  data={rowDataB}/>
            </div>
         </div>
    )
}