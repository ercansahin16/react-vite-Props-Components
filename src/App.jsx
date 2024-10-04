import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import { course } from './Components/Data'
import './css/contentc.css'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>

      <div className='course-main'>
      {course?.map((course)=>(
          <Content key={course.id} course={course} />
        ))}
        </div>

        <Footer></Footer>





    </div>
  )
}

export default App