import React, { useEffect, useState } from 'react'

export default function Test() {
    const [data, setData] = useState()

    useEffect(() => {
         gd()
    }, [])
    
    
    return (
        <div>
            Hello world { data }       
        </div>
    )
}
async function gd(){
    return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>res.json())
}