

import { useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div>
           <h1 className="text-5xl text-center">
            {count}
           </h1>

           <div className="flex gap-3 items-center justify-center">
            <button onClick={increase}>ADD</button>
            <button onClick={decrease}>MINUS</button>
           </div>
        </div>
    )
}