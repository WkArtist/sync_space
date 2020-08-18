import React, { useState, useEffect } from 'react'

export default function App() {
    const [n, setN] = useState(0)
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log(n)
    //     }, 5000)
    // })
    return (
        <div>
            <h1>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>n+1</button>
        </div>
    )
}


