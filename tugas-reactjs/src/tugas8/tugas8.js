import React from "react";
import { useState } from "react";
import '../App.css'

const Tugas8 = () => {
    const [count, setCount] = useState(1)

    const handleCouter = () =>{
        setCount(count+1);
    }

    return(
        <div className="App">
            <main>
            <div className='wrapper'>
                <p id="tugas-8">{count}</p>
                <button onClick={handleCouter}>Tambah</button>
                {count > 9 && <p>State count sudah lebih dari 10!!</p>}
            </div>
            </main>
        </div>
    )
}

export default Tugas8;
