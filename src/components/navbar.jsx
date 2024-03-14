function Navbar({svg}){
    return(
        <nav className="flex flex-row justify-around items-center text-white w-4/5 mx-auto h-10 bg-red-700 rounded-full bg-opacity-55 border-2 border-red-700">
            <span>username</span>
            <img src={svg} className="w-6 h-6" alt="close" />
        </nav>
    )
}

export default Navbar