import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

 

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {
        <ReactMarkdown components={{
            img(image){
                return <Image src={image.src} alt={image.alt} width={500} height={300}/>
            },
            code(code){
              const {lang, children} = code
              
              return <SyntaxHighlighter language={`${lang}`} style={dark}>{children}</SyntaxHighlighter>
            }
            
        }}>
          {post.content}
        </ReactMarkdown>
      }
    </article>
  );
}
