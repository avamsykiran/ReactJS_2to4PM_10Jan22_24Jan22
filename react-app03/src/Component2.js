import { useEffect, useState } from "react";

const Component2 = props => {

    let [count1,setCount1] = useState(0);
    let [count2,setCount2] = useState(0);
    
    useEffect(()=>{
        console.log("Component2 useEffect with no dependency array got executed!");    
    });

    useEffect(()=>{
        console.log("Component2 useEffect with empty dependency array got executed!");    
    },[]);

    useEffect(()=>{
        console.log("Component2 useEffect with count1 as dependency got executed!");    
        if(count1>=5){
            setCount2(count2+1);
            setCount1(0);
        }
    },[count1]);

    useEffect(()=>{
        console.log("Component2 useEffect with count2 as dependency got executed!");    
    },[count2]);


    console.log("Component2 render got executed!");
    return (
        <div>
            <h3>{count1}  and {count2}</h3>
            <button onClick={e => setCount1(count1+1)}>UP</button>
        </div>
    );
};

export default Component2;