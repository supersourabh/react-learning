import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
  return (
    <>
    <h1>404 | NotFound</h1>
    <button onClick={()=> navigate("/")} >Go to HOME</button>
    </>
  )
}
