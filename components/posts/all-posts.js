import clasees from './all-posts.module.css'
import PostsGrid from './posts-grid'

export default function AllPosts(props){
    return <section className={clasees.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts}/>
    </section>
}