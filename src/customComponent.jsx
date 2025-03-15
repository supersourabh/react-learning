import React, { useContext, useEffect, useState, memo } from 'react'
import { ThemeContext } from './contexts'
import fetchData from './fetchData'

export default memo(function CustomComponent({id}) {

  console.log("redered")

  return (<>

    {/* <h1>Theme is : {theme}</h1> */}
    <h1>Id is : {id()}</h1>
    {/* <button onClick={() => { setId(1); }}> Change Theme</button> */}

  </>
  )
})
