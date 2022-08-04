import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

const BlogDetail = ({
    blogDetail
}) => {
    let router= useRouter();
    
    return (
        <div>
            <button onClick={() => router.back()}>Back</button>
            <h1>{blogDetail?.title}</h1>
            <p>{blogDetail?.body}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    let fetchBlogs = await fetch("https://jsonplaceholder.typicode.com/posts");
    let resBlogs = await fetchBlogs.json();
    return {
        paths: resBlogs.map(_data => {
            return {
                params: {
                    slug: `${_data.id}`
                }
            }
        }),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    let blogDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.slug}`);
    let resBlogDetail = await blogDetail.json();
    return {
        props: {
            blogDetail: resBlogDetail
        }
    }
}


export default BlogDetail