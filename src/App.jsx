import Card from './components/Card'
import Navbar from './components/navbar'
import Daybtn from './components/Daybtn'
import unnamed from './assets/unnamed.gif'
import userimg from './assets/user.svg'
import './App.css'

function App() {
  
  //img, day, date, work_idone, rate, problems_that_sloved, discription
  return (
    <>
      <Navbar svg={userimg} />
      <div className='flex flex-row flex-wrap gap-4 w-4/5 mt-8 mx-auto'>

      <Daybtn day={"1"}/>
      <Daybtn day={"2"}/>
      <Daybtn day={"3"}/>
      <Daybtn day={"4"}/>
      <Daybtn day={"5"}/>
      </div>
      {/* <Card img={unnamed} day={'1'} date={"13/3/24"} work_idone={"finish fundamentales of react"} rate={"⭐⭐⭐⭐"} problems_that_sloved={["string","array","somthing","all things"]} discription={"i lerned react workes on baser of an algoreathim that is cald as fiber. fiber was well inplimented algorethem. after that i lernd react hookes"} /> */}

    </>
  )
}

export default App
