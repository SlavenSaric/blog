import PostHeader from "./post-header";
import classes from './post-content.module.css'

const dummyPost = {slug: 'getting-started-with-nextjs', 
title: 'Getting Started with NextJS', 
image: 'getting-started-nextjs.png', 
content: '# This is a first post', 
date: '2022-02-12',}

export default function PostContent(){

    const imagePath = `/images/posts/${dummyPost.image}`

    return <article className={classes.content}>
        <PostHeader title={dummyPost.title} image={imagePath} />
        {dummyPost.content}
    </article>
}