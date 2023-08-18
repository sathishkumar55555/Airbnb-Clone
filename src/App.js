import React from "react";
import Navbar from "./NavBar"
import Hero from "./Hero"
import Card from "./Card";
import PersonData from './PersonData';

function App(){
  const personElements = PersonData.map(function(person){
    return(
        <Card {...person}/>
    )
  })

   return(
     <div>
         <Navbar />
            <Hero />
      <section className="cards-list">
      {personElements}
            </section>
     
     </div>
   )
}

export default App;