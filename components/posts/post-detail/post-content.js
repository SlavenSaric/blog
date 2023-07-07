import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const costumRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`images/posts/${post.slug}/${image.url}`}
    //       alt={image.src}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0] === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`images/posts/${post.slug}/${image.url}`}
              alt={image.src}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <h1>{paragraph.children}</h1>
    },
  };

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
              
              return <Prism language={lang} style={atomOneDark}>{children}</Prism>
            }
            
        }}>
          {post.content}
        </ReactMarkdown>
      }
    </article>
  );
}
