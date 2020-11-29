import React from "react";

import {getAnimations} from "./MergeSort";
import { useState } from "react";



 function Body() {
     const initialCount = 0;
    let [array,setArray]= useState([initialCount]);
    

    const callMe=()=>{
        array.length=0;
        // console.log(array); 
        resetArray();
        
        
    }
    const resetArray =()=>{
    const size= prompt("no of bar graphs you want?");

    
            for (let i = 0; i < size; i++) {
                
                let randomNumber = Math.floor(Math.random() * 600 ) + 5;
                setArray(newarray=>[...newarray,randomNumber]);
                }
        const arraybars = document.getElementsByClassName('array_bars');
       
                
                }
                const width= 1200/array.length;
                console.log(width);
 const ANIMATION_SPEED_MS = 10;
 const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR ='limegreen';

    const mergeSort =()=>{
      console.log(array);
    
        const animations=  getAnimations(array);
      
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array_bars');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
              const [barOneIdx, barTwoIdx] = animations[i];
              // console.log(barOneIdx,barTwoIdx);
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : FINAL_COLOR;
              setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
              }, i * ANIMATION_SPEED_MS);
            } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                // console.log(barOneIdx,newHeight);
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.backgroundColor = FINAL_COLOR;
                barOneStyle.height = `${newHeight}px`;
              }, i * ANIMATION_SPEED_MS);
            }

          }
         
      // const javaScriptSortedArray = array.slice().sort();
      // const mergeSortedArray = array.slice();
      // const output=arraysAreEqual(javaScriptSortedArray, mergeSortedArray);
      // if(output){
      //  sorted();
      // }
          
         
    }
    function arraysAreEqual(arrayOne, arrayTwo) {
      if (arrayOne.length !== arrayTwo.length) return false;
      for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        }
      }
      return true;
    }
    const sorted=() =>{

      for(let j=0;j<array.length;j++){
        const arraybars = document.getElementsByClassName('array_bars');
      const barstyle=arraybars[j].style;
      barstyle.backgroundColor='purple';
   
      }
    }
   
    return(
        
       <div >
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     
  <a class="navbar-brand" href="#">Sorting Visualizer</a>
 
  <button className="btn text-white " onClick={callMe}>RESEST ARRAY</button>
        <button className="btn text-white" onClick={mergeSort}>MERGE SORT</button>
  
</nav>

       <div className="content">

       <div className= " array_section">
     
       {array.map((value,index)=>(
           <div className="array_bars" key={index} style={{backgroundColor: PRIMARY_COLOR, height:`${value}px`, width: `${width}px`} }></div> 
       ))}

       
        <div className="footer fixed-bottom">
      
      SRISHTY TAKYAR_2020  Sorting visualizer_© 
    
        </div> 
        </div>
         </div>
         
      
       </div>
        
    )
}
export default Body;



