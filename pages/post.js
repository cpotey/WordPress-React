import Layout from '../components/Layout.js'
import PageHeader from "../components/PageHeader"
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList"

import Head from 'next/head'
import axios from 'axios';




const Post = props => {

    

    function readingTime(text) {
        const wordsPerMinute = 200;
        const noOfWords = text.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return `${readTime} minute read`;
    }
      
    
    console.log(props)
    let excerpt = props.post.excerpt.rendered.replace(/(<([^>]+)>)/ig,"");
    return (
        <Layout>

            <Head>
                <title>{props.post.title.rendered}</title>
                <meta name="description" content={excerpt} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            
            <PageHeader 
                header={props.post.title.rendered}
                isPost={true}
                category={ props.post._embedded["wp:term"] ?
                        props.post._embedded["wp:term"][0][0]
                    : null }
                date={props.post.date}
                image={ props.post._embedded['wp:featuredmedia'] ?
                            props.post._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url
                    : null }
                readingTime={readingTime(props.post.content.rendered)}
            />

            
                    { props.post._embedded['wp:featuredmedia'] ?
                    <div className="container featured-image">
                        <div className="row justify-content-center">    
                            <div className="col-md-10">  
                            <img src={props.post._embedded['wp:featuredmedia']['0'].source_url} />
                            </div>
                        </div>
                    </div>
                    : null }
                    

            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col-md-7">  

                    <article
                    className="entry-content"
                    dangerouslySetInnerHTML={ {
                    __html: props.post.content.rendered
                    } } />

                    
                    {/* {props.post._embedded["wp:term"][0].length > 0 && (
                        <div>
                            Categories: <CategoryList terms={props.post._embedded["wp:term"][0]} />
                        </div>
                    )} */}

                    </div>

                </div>
            </div>

            <section className="author">
                <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-8 col">

                    <h5 className="title">Author</h5>
                    <img className="author-icon" src={props.post._embedded.author[0].avatar_urls[96]} />
                    <h4>{props.post._embedded.author[0].name}</h4>
                    {props.post._embedded.author[0].description ?
                        <p>{props.post._embedded.author[0].description}</p>
                    : null }
                    

                    </div>
                </div>

                </div>
            </section>

  

            <style jsx>{`
            article.entry-content {
                margin:2rem 0;
                font-size: 18px;
                line-height:28px;
                line-height: 33px;
            }
            article.entry-content > * {
                margin: 32px 0;
            }

            .featured-image img {
                width: auto;
                margin: 0 auto;
                display: block;
                max-height: 450px;
            }

            .author {     
                text-align:center;
                margin-top:2em;
            }
            .author .col {
                border-top: 1px solid rgb(232,232,232);
                padding: 30px 30px 40px;
            }
            .author h5 {
                font-size: 15px;
                margin-bottom: 1.5rem;
            }
            .author img {
                height: auto;
                border-radius: 50%;
                max-width: 75px;
            }
            .author h4 {
                line-height: 1.13636em;
                margin-bottom: 0;
                margin-top: 1em;
                font-size: 22px;
                font-weight:bold;
            }
            .author p {
                font-size: 1em;
                margin: .8em 0 1.2em;
                line-height: 1.375em;
                max-width:80%;
                margin:0.8em auto 1.2em;
            }
            `}</style>

            <section className="latest-posts">
                <div className="container">
                <h2>Latest Posts</h2>
                </div>
                {<PostList posts={props.posts} />}

            </section>
                
            <style jsx>{`
                h2 {
                font-weight:bold;
                }
                .latest-posts {
                margin-top:3rem;
                }
                .latest-posts h2 {
                margin-bottom:1.5rem;
                }

            `}</style>
        </Layout>
    )   
}

Post.getInitialProps = async function(context) {
    const slug = context.query.title 
    const post = await axios.get(`http://blog.connorpote.co.uk/wp-json/wp/v2/posts?_embed&slug=${ slug }`)
    
    const otherPosts = await axios.get('http://blog.connorpote.co.uk/wp-json/wp/v2/posts?_embed', {
        params: {
          per_page: 3,
          exclude: post.data[0].id
        }
    })
    
    

    return { 
        post: post.data[0],
        postid: post.data[0].id,
        posts: otherPosts.data,
    }
}

export default Post