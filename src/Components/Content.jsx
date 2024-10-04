import React from 'react'
import '../css/contentc.css'

function Content({course}) {
    const {id,title,description,piece,link,img}=course;
  return (
    <div className='course'>
<div className='cart'>
    <img src={img} width={250} height={150}/>
    <h3>{title}</h3>
    <h4>{description}</h4>
    <h2>₺{piece} </h2>
    <hr width={200}></hr>
   <div style={{textAlign:'center'}}><a href={link}  >Satın almak için tıkla</a></div>
</div>
    </div>
  )
}

export default Content