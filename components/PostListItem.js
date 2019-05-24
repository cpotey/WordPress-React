
import Link from 'next/link'

const PostListItem = ({ post, index }) => {
    console.log(post)

    let indexClass = (index === 0 || index === 5 ) ? `col-xs-3 col-md-6 col-lg-6 ` : `col-xs-3 col-md-6 col-lg-3 `; 

   

    return (
    
    <div className={indexClass} style={{ marginBottom: "30px" }}>

    <Link as={`/post/${post.slug}`} href={`/post?title=${post.slug}`}>
    
    
    <div key={ post.id } className={`blog-tile tile-${index}`}>
    {/* <div key={ post.id } className={`blog-tile tile-${index}`} style={{ 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: (post._embedded["wp:featuredmedia"] ? 
            (
                "url(" + post._embedded['wp:featuredmedia']['0'].source_url + ")"
            ) : (
                ""
            )
        ) 
    }}> */}

    {/* {
        post._embedded["wp:featuredmedia"] ? 
              <img className="header-image" src={post._embedded['wp:featuredmedia']['0'].source_url} style={{display:"block"}} />
         : null 
    } */}

    {/* { (post._embedded["wp:featuredmedia"] == "undefined") ?
        <div key={post.id} className={`blog-tile tile-${index} featured-image`}> : 
        <div key={post.id} className={`blog-tile tile-${index} no-featured`}> } */}

            {/* <div className="tile-content"> */}

                <div className="tile-content" style={{ 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: (post._embedded["wp:featuredmedia"] ? 
            (
                "url(" + post._embedded['wp:featuredmedia']['0'].source_url + ")"
            ) : (
                ""
            )
        ) 
    }}>
            
            { post._embedded["wp:term"] ? 
                
                ((post._embedded["wp:term"][0][0].name !== "Uncategorized") ? <h3 className="category">{post._embedded["wp:term"][0][0].name}</h3>
                : ``
                ) : (
                    ``
                )
            }

            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <Link as={`/post/${post.slug}`} href={`/post?title=${post.slug}`}>
            <a className="button">Read more</a>
            </Link>
            </div>
        
        <style jsx>{`

        @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
            
            .blog-tile {
                border-radius:10px;
                color:#fff;
                background-color:rgb(21,35,48);
                height:100%;
                min-height: 275px;
                position: relative;
                cursor:pointer;
                
                box-shadow:rgba(0, 0, 0, 0.2) 0px 8px 16px 0px;
                animation: fadein 1s;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                overflow:hidden;
                transition:.3s ease;
            }
            .blog-tile:hover {
                box-shadow:rgba(0, 0, 0, 0.25) 0px 8px 16px 0px;
            }
            .blog-tile img {
                width: auto;
                height: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            .tile-content {
                padding: 25px 20px;
                display: flex;
                flex-direction: column;
                height:100%;
                position: relative;
            }
            .blog-tile .button {
                align-self: flex-start;
                background-color: #fff;
                padding: 7px 18px;
                border-radius: 3px;
                text-decoration:none;
                margin-top: auto;
                font-size:14px;
                box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 12px 0px;
                color:rgb(21,35,48);
            }
            .blog-tile .category {
                color: rgba(255, 255, 255, 0.7);
                font-size:12px;
                text-transform:uppercase;
            }
            .blog-tile h2 {
                font-size:1.9rem;
                font-weight:bold;
            }
            .tile-1,.tile-2,.tile-3,.tile-4 {
                min-height:300px;
            }
            

            .tile-0, .tile-6 {
                background: rgb(111,169,165);
                background: linear-gradient(90deg, rgba(111,169,165,1) 0%, rgba(209,224,223,1) 100%);
            }
            .tile-0 .button, .tile-6 .button {
                color:rgba(111,169,165,1);
            }
            .tile-0 h2, .tile-5 h2 {
                max-width: 60%;
            }

            .tile-1, .tile-7 {
                background: rgb(21,35,48);
            }
            .tile-1 .button, .tile-7 .button {
                color:rgb(21,35,48);
            }

            .tile-2, .tile-8 {
                background: rgb(201,161,129);
                background: linear-gradient(180deg, rgba(201,161,129,1) 29%, rgba(228,196,171,1) 100%);
            }
            .tile-2 .button, .tile-8 .button {
                color:rgba(201,161,129,1);
            }

            .tile-3, .tile-9 {
                background: rgb(53,167,200);
                background: linear-gradient(180deg, rgba(53,167,200,1) 29%, rgba(200,224,237,1) 100%);
            }
            .tile-3 .button, .tile-9 .button {
                color:rgba(53,167,200,1);
            }

            .tile-4 {
                background: rgb(253,155,161);
                background: linear-gradient(180deg, rgba(253,155,161,1) 29%, rgba(242,219,224,1) 100%);
            }
            .tile-4 .button {
                color:rgba(253,155,161,1);
            }

            .tile-5 {
                background: rgb(95,186,251);
                background: linear-gradient(90deg, rgba(95,186,251,1) 23%, rgba(224,240,250,1) 100%);
            }
            .tile-5 .button {
                color:rgb(95, 186, 251);
            }

            

        `}</style>

    </div>
    </Link>

    </div>
    )
};

export default PostListItem;