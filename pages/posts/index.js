import AllPosts from "../../components/posts/all-posts";

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

export default function AllPostsPage(){
    return <AllPosts posts={DUMMY_POSTS} />
    
}