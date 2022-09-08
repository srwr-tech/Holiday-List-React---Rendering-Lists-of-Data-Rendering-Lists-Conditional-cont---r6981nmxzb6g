import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
 
    ]

    this.finalList = this.sort();
}
  getKey(index) {
      return "location"+(index+1);
  }

  sort(){
   
    const indianCity = []
     this.cityList.forEach((city) =>{
        
        if  (city.country === "India" && !indianCity.includes(city.name))
        { 
          console.log(indianCity)
           indianCity.push(city.name)
        }
   })
      
    return indianCity;
  }

  render() {
    

    return (
      <div id="main">
        {/* Do not remove the main div */}
        
        <ol>
            {this.finalList.map((city,index)=>{
                return <li key = {this.getKey(index)}>{city} </li>
              })}
        </ol>
      </div>
    )
  }
}


export default App;
