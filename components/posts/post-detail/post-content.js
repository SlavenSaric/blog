import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/hljs/dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

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
