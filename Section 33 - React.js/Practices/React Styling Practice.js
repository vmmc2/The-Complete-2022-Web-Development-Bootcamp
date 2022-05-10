//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().toLocaleTimeString(
  'en-US',
  {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  }
);

function getGreeting(currentTime){
  const hour = parseInt(currentTime.substring(0, 2), 10);
  let answer = "";
  if(hour >= 0 && hour < 12){
    answer = "Good Morning!";
  }else if(hour >= 12 && hour < 18){
    answer = "Good Afternoon!";
  }else{
    answer = "Good Evening!";
  }
  return answer;
}

function getH1Color(){
  const greeting = getGreeting(currentTime);
  if(greeting === "Good Morning!"){
    return {color: "red"};
  }else if(greeting === "Good Afternoon!"){
    return {color: "green"};
  }else{
    return {color: "blue"};
  }
}

ReactDOM.render(
  <h1 style={getH1Color()}> {getGreeting(currentTime)} </h1>,
  document.getElementById("root")
);
