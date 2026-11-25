import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const[data,setdata]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/souvikadakm3-dotcom')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setdata(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt='github picture' width={300}/>
    </div>
  )
}

export default Github
export const githubinfoloader=async()=>{
    const response=await fetch('https://api.github.com/users/souvikadakm3-dotcom');
    return response.json();
};
