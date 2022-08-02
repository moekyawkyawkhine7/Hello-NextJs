import React from 'react'
// lib
import { GetStaticProps } from "next";
import path from 'path';

export const getStaticProps: GetStaticProps = async (context) => { // only work on server
    // it will render before the current comp render
    const fs= require('fs');
    const txt = fs.readFileSync(path.join(process.cwd(), 'public/robot.txt'), 'utf8');
    return {
        props: {
            revalidate: 10, // if will re-create static page, after 10s all the time
            text: txt
        }
    }
}

const index = ({
    text
}) => {
    return (
        <div>
            Get Static Props - {text}
        </div>
    )
}

export default index