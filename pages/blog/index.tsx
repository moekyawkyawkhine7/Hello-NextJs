import React from 'react';
import { GetStaticProps } from 'next';
// scss
import Styles from "./blog.module.scss";
// lib
import Link from 'next/link';

const index = ({
    blogs = []
}) => {
    return (
        <div className={Styles.blogWrapper}>
            {
                blogs.length > 0 && (
                    blogs.map(_data => (
                        <div key={_data.id} className={Styles.blogCard}>
                            <Link href={`/blog/${_data.id}`}>
                                <h1>{_data.title}</h1>
                            </Link>
                            <p>{_data.body}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    let fetchBlogs = await fetch("https://jsonplaceholder.typicode.com/posts");
    let resBlogs = await fetchBlogs.json();
    return {
        props: {
            blogs: resBlogs
        }
    }
}

export default index