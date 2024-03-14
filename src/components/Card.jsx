import Navbar from "./navbar"
import back from "../assets/back.svg"
import { useState } from "react"
import { useEffect } from "react"


function Card({ img, day, date, work_idone, rate, problems_that_sloved, discription }) {
    // console.log(img, day, date, work_idone, rate, problems_that_sloved, discription)
    const [count,setcount] = useState(0)
    useEffect(()=>{
        // setcount(count+1)
    })
    return (
        <>
            <Navbar svg={back}/>
            <div className="flex flex-col mx-auto w-1/3 max-lg:w-4/5 mt-6 h-auto p-5 justify-center items-center border-slate-950 bg-fuchsia-950 text-red-200 rounded-2xl shadow-xl shadow-pink-900 drop-shadow-2xl">
                <img src={img} className="my-4 w-96 h-44 rounded-xl shadow-md shadow-orange-400 drop-shadow-2xl " alt="retro image" />
                <div className="flex flex-col justify-start items-start mt-2 gap-4  max-md:self-start p-4">
                    <span className='font-honk text-3xl'>Day {day}</span>
                    <span className="">Date📅: {date}</span>
                    <p >Day title : <span className="font-bigf text-lg">{work_idone}</span></p>
                    <div>
                        <span>Day reatings: </span>
                        {rate}

                    </div>
                    <p>problem solved:
                        <span className="flex flex-row flex-wrap">
                            {problems_that_sloved ? problems_that_sloved.map((problem) => {
                                return (


                                    <span key={problem} className="mx-1 rounded-lg bg-red-600 px-3 text-white text-sm bg-opacity-10 border-2 border-red-800">{problem}</span>


                                )
                            }) : "No problems solved"}
                        </span>
                    </p> {/* this is an array */}
                    <p>discription: {discription}</p>
                </div>
            </div>
        </>
    )
}

export default Card