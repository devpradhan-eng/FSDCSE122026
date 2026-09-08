import React, { useState } from 'react'
import cat from '../images/cat.png';

function Imagemanipulation() {

    const[height,setHeight]=useState(200);
    const[width,setWidth]=useState(200);
    const[red,setRed]=useState(20);
    const[green,setGreen]=useState(200);
    const[blue,setBlue]=useState(140);
    const[angle,setAngle]=useState(0);
    const[marginLeft,setMarginLeft]=useState(0);

function enhanceHeight(){
setHeight(height+10);
}


function enhanceWidth(){
setWidth(width+10);
}
function changebgcolor(){
  setRed(Math.floor(Math.random() * 256));
  setGreen(Math.floor(Math.random() * 256));
  setBlue(Math.floor(Math.random() * 256));
}
function rotateImage(){
  setAngle((prevAngle) => prevAngle + 25);
}
function margin(){
  setMarginLeft(marginLeft+10);
}
  return (
    <div>
<h2 style={{color:'white',backgroundColor:'brown'}}> Image Manipulation using React</h2>
<div style={{border:'2px solid red',height:'300px', width:'400px',marginLeft:`${marginLeft}px`}}>
<img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`,transform:`rotate(${angle}deg)`}}></img>
<div>
    <h2>Cat height:{height}</h2>
    <h2>Cat width:{width}</h2>
    <h2>Color code:({red}, {green}, {blue})</h2>
</div>
</div>
<div>

</div>
<button onClick={enhanceHeight}>EnhanceHeight</button>
<button onClick={enhanceWidth}>EnhanceWidth</button>
<button onClick={changebgcolor}>Change Background Color</button>
<button onClick={rotateImage}>Rotate Image</button>
<button onClick={margin}>Move Image Left</button>

    </div>
  )
}

export default Imagemanipulation