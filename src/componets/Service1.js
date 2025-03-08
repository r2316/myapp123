import React from "react";
import Service from './Service';

export default function Services() {
  
  const servicesData = [
    {
      imgurl: "https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg",
      title: "pickup and drop",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    },
    {
      imgurl: "https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg",
      title: "pickup and drop",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    },
    {
      imgurl: "https://www.shutterstock.com/image-illustration/pick-up-sign-illustrate-car-260nw-297184955.jpg",
      title: "pickup and drop",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    }
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Services</h1>
      <div className="services">
        {servicesData.map((service, index) => (
          <Service 
            key={index}  
            imgurl={service.imgurl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
}
