import './App.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {
 
  //link used to directly fetch without the loader
  return <div>
 <BrowserRouter>
   
  <Routes>
    <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
    <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
    <Route path="/" element={<Landing />}/>
  </Routes>
 </BrowserRouter>
 </div>
}
function Class11Program(){
  return <div>
    NEET Program for the class 11th students
  </div>
}
function Class12Program(){
  return <div>
    NEET Program for the class 12th students
  </div>
}
function Landing()
{
  return <div>
    welcome to allen
  </div>
}
export default App
