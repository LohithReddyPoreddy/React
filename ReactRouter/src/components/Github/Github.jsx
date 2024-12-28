import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/LohithReddyPoreddy')
    //     .then((res) => res.json())
    //     .then(data => setData(data));
    // },[])

  return (
    <>
    <div className='bg-gray-500 text-white text-center p-4'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    </>
    
  )
}

export default Github

export const gitHubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/LohithReddyPoreddy')
    return response.json();
}