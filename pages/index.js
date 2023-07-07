import FeaturedPosts from "../components/home-page/Featured"
import Hero from "../components/home-page/Hero"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a React Framework for production - it makes building fullstackt apps and sites easier', 
        date: '2022-02-12',
    },
    {
        slug: 'getting-started-with-nextjs2', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a React Framework for production - it makes building fullstackt apps and sites easier', 
        date: '2022-02-12',
    },
    {
        slug: 'getting-started-with-nextjs3', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a React Framework for production - it makes building fullstackt apps and sites easier', 
        date: '2022-02-12',
    },
    {
        slug: 'getting-started-with-nextjs4', 
        title: 'Getting Started with NextJS', 
        image: 'getting-started-nextjs.png', 
        excerpt: 'NextJS is a React Framework for production - it makes building fullstackt apps and sites easier', 
        date: '2022-02-12',
    },
]

export default function HomePage(props){
    return <>
    <Head>
        <title>Slaven's Blog</title>
        <meta name="description" content="I post about web development" />
    </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </>
}

export  function getStaticProps(){
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 3600
    }
}