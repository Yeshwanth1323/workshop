import Navbar from "./componets/Navbar"
const App = () => {
    

    const data={
        appname: "Hello"

    }
    const logodata = "mylogo"
    const test = "hello world"
    const ar = "arru baby"
    return (
    <>
     <div class="box" id="box2">box1</div>
     <div class="box" id="box3">box2</div>
    <p className="text-red-500">{test}</p>
    <p className="text-blue-500">{ar}</p>
       <Navbar appdata={data}  logo={logodata}></Navbar>

    </>
    
  )
}

export default App