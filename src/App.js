import './App.css';
import React,{useState}from "react";
import pandemic from './images/pandemic.jpg'
import nhs from './images/nhs.webp'
import morgan from './images/morgan.jpg'
import beauty from './images/beauty.jpg'
import fate from './images/fate.jpg'
import wire from './images/wire.jpg'
import star from './images/star.jpg'
import gambit from './images/gambit.jpg'
import witcher from './images/witcher.png'



const App=() =>{
  const [projector,setProjector]=useState([

  {image:pandemic, text :"Don't think pandemic is over, Whitty warns", 
  text2: "Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says." },
  {image:nhs, text :"Pay rise was set to 2,1% - NHS chief",
  text2:"NHS England boss backs minister over pay dispute but does not rule out a one-off bonus for workers."},
  {image:morgan, text :"Charity criticises Morgan's comments about Meghan", 
  text2:"Mental health charity mind says it is 'disappointed' by comments Piers Morgan made on Monday."},
  {image:beauty, text :"Unilever drops word 'normal from beauty products",
  text2:"The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity."}])

  const [movie,setMovie]=useState([
    {image2 :fate},
    {image2 :wire},
    {image2 :star},
    {image2 :gambit},
    {image2 :witcher}
  ])
  return ( 
    <div > 
    {projector.map((projector,index)=>{
      return<Photo key={index} image={projector.image} text={projector.text}text2={projector.text2}/>})}
      
    {movie.map((movie)=>{
      return<Movie image2={movie.image2} />})}
      </div>
      )
    }
  const Movie = (props)=>{
    return(
      <div>
        <div className="line2">
          <img className="image2" src={props.image2}/>
        </div>

      </div>
    )
  }
  const Photo = (props)=>{
    return (
      <div className="row">
      <div className="line">
        <img className="images" src={props.image}/>
        <h3 className="text">{props.text}</h3>
        <p className="text2">{props.text2}</p>
      </div></div>
    )
  }

          


export default App;
