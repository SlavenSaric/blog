import classes from './hero.module.css'
import Image from 'next/image'

export default function Hero(){
    return <section className={classes.hero}>
        <div className={classes.hero}>
            <Image className={classes.image} src="/images/site/slaven.jpg" alt='An image showing Slaven' width={300} height={400}/>
        </div>
        <h1>Hi, I'm Slaven</h1>
        <p>I blog about web development - especially fronted</p>
    </section>
}