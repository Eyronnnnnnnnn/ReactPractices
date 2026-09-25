            import { useEffect, useState } from "react"




            export default function UseEffectFetchingonMount(){

                const [loading, setLoading] = useState(true);
                const [user, setUser] = useState([])

                useEffect(()=>{
                 
                    const fetchUser = async() => {
                    try{
                    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
                    const  data = await response.json();
                    setUser(data);
                    setLoading(false); // loading state 
                      }catch(error){
                        console.log(error);
                        setLoading(false);
                    }
                    }
                  
                  
                    
                    fetchUser();
                },[])

                return(
                    <div>
                        
                        <h1>hello worldds</h1>
                        {loading === true ? <p>loading...</p> : user.map((users)=>(
                             <p key={users.id}>{users.name}</p>
                        ))}
                    </div>
                )
            }