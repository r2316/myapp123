/*import React from "react";
import Service from './Service'
export default function Services(){
    return(
        <>
        <h1 style={{textAlign:"center"}}>Services</h1>
        <div class="services">
            <Service imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
            title="pickup and drop"
            description="Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since"></Service>
        </div>

        <div class="services">
            <Service imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
            title="pickup and drop"
            description="Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since"></Service>
        </div>

        <div class="services">
            <Service imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
            title="pickup and drop"
            description="Lorem Ipsum is simply dummy text of the printing and
                 typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since"></Service>
        </div>
        </>

    )
}*/
/*import React from "react";
import Service from './Service';

export default function Services() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Services</h1>
      <div className="services">
        <Service 
          imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
          title="pickup and drop"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
        <Service 
          imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
          title="pickup and drop"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
        <Service 
          imgurl="https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg"
          title="pickup and drop"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        />
      </div>
    </>
  );
}*/
import React from "react";
import Service from './Service';
import { serviceArray } from "./ServiceData";


export default function Services()
{
  let ServiceUI = serviceArray.map((s)=>
  {
    return<Service title={s.title} imgurl={s.imgurl}
    description={s.description}></Service>
  })
  return(
   <>
   <h1 style={{ textAlign: "center" }}>Services</h1>
    <div class="services">
      {ServiceUI}
      </div>
   </>
    
    
  )
}

