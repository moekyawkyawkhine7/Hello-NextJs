import React from 'react'
import { useRouter } from 'next/router';

// This file will work below routes 
// http://localhost:3000/fruit/hello
// http://localhost:3000/fruit/abc
// http://localhost:3000/fruit => it will not work, you just need to create a index file

// fruit/[name = dynamic]/ folder => dynamic segment
// [subname] file => dynamic subname

const FruitDetail = () => {
    const router = useRouter(); // you can control everything you can like push, replace, back etc.
    //
    const goToHome = () => {
        // router.replace("/"); // if you use replace, that current route is not recorded as a previous route.
        router.push("/"); // if you use push, that current route is recorded as a previous route.
    }

    return (
        <div>
            FruitDetail, Folder: {router.query?.name}, File: {router.query?.subname}.  
            <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default FruitDetail