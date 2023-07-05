import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage(props){
    return <PostContent post={props.data}/>
}

export function getStaticProps(context){
    const params = context.params
    const {slug } = params
    const data = getPostData(slug)
    return {
        props: {
            data: data
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
    const paths = getPostsFiles()
    const slugs = paths.map(file => file.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}