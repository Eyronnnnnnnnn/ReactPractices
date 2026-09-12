    import { useState } from "react"



    function Personfunction(props){

        return(
            <div>
                <h1>Aaron Guillermo is :{props.person.age} old</h1>
                <h2>your to : </h2>
                <input className="border border-black ml-4" type="number" placeholder="Put Age"
                value={props.newAge}
                onChange={(event)=> props.setInputage(event.target.value)}
                />
                <button className="bg-slate-500"
                onClick={(event)=> props.setAge()}
                >Submit</button>
            </div>
            
        ) 
    }

    export default function Inputname(){
        const [person ,setPerson] = useState({age :19})
        const [ageInput , setAgeInput] = useState(0);
       const ageIndicator = [
        {adult : "Old" , teen : "Young"}
       ]

       const indicate = person.age >=29 ?

        function submitAge(){
            setPerson({...person , age: ageInput })
        }

        return(
            <Personfunction
            person = {person}
            setP = {setPerson}
            setAge = {submitAge}
            setInputage = {setAgeInput}
            newAge = {ageInput}
            />
        )
    }