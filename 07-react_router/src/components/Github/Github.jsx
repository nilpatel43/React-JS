import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/nilpatel43')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img
                className=''
                src={data.avatar_url}
                alt="Git Picture"
                width={200}
            />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nilpatel43')
    return response.json()
}
