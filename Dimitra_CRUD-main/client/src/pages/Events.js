import React from "react";
 
export const Events = () => {

// Style for the content section
  const contactStyle = {
    margin: "100px",
  
  };


  return (
    <div className="events"  style= {contactStyle}>
      <h1 style= {{fontWeight: "bold"}}>Events</h1>
      At Employee Management System, we offer a wide range of events and services catered to the needs of modern businesses. Our team of experts is dedicated to delivering top-notch solutions that enhance employee engagement, productivity, and satisfaction. From training workshops and seminars to team-building activities, we provide comprehensive event management services that foster a positive work environment and promote professional growth. Additionally, we offer customized consulting services to help businesses optimize their employee management strategies, ensuring they get the most out of our platform and achieve their organizational goals.
    </div>
  );
};
 
export const EventsOne = () => {
  return (
    <div className="events">
      <h1 style= {{fontWeight: "bold"}}>Event1</h1>
    </div>
  );
};
 
export const EventsTwo = () => {
  return (
    <div className="events">
      <h1 style= {{fontWeight: "bold"}}>Event2</h1>
    </div>
  );
};
