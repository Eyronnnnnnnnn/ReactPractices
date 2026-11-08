export default function useLocalStorage(){

    const [count ,setCount] = useState(0);

    return(
        <div>
            <h1>click : {count}</h1>
        </div>
    )
}