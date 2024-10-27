import React,{ useEffect, useState} from 'react'
const Navbar = ({appdata,logo}) =>{

    const [numberstate ,setNumberstate] = useState(0)
    const [stringstate,setStringstate] = useState ("a")
    const [arraystate,setArraystate] = useState(["a",false,0])

    //console.log(numberstate)
   // console.log(stringstate)
    //console.log(arraystate)

    const [count, setCount] = useState(0);
    useEffect (()=>{
        alert('effect rendered')
        console.log("count is " +count)
    },[count])
    return (
    <>

    <button className="p-2 bg-blue-400 text-cyan-100" onClick={ () => {setCount(count+1)}}>
        Count {count}
       </button>
    </>
    )
}

export default Navbar