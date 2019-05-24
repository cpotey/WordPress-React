import Head from 'next/head'
import Link from 'next/link'

const PageHeader = (props) => {
    
    {/* <div className={(props.isPost === true ) ? "page-header is-post" : `page-header`} style={{ 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage: (props.image ? 
            (
                "url(" + props.image + ")"
            ) : (
                ""
            )
        ) 
    }}> */}

    return (

     

     <div className={(props.isPost === true ) ? "page-header is-post" : `page-header`}> 

     {
        props.image ? 
              <img className="header-image" src={props.image}  />
         : null 
    }

        

        <Head>
            <title>{props.header}</title>
            <meta name="description" content={props.overview} />
        </Head>
        

        <div className="container">
       
       <div className="left">
        <div className="breadcrumbs">
            {(props.isPost === true ) ? 
                <Link href="/posts">
                    <a>Return to Blog</a>
                </Link> 
            : ``}

                { props.category ? 
                
                    ((props.category.slug !== "uncategorized") ? <Link href={`/category/${props.category.slug}`}>
                        <a className="category button">{props.category.name}</a>
                    </Link>  
                    : ``
                    ) : (
                        ``
                    )
                }

                {(props.date) ? 
                <p className="date">{dateConvert(props.date)}</p>
                : ``}

                {(props.readingTime) ? 
                <p className="date">{props.readingTime}</p>
                : ``}
            
        </div>
        <h1 dangerouslySetInnerHTML={ {
                    __html: props.header
                    } } />
        <p dangerouslySetInnerHTML={ {
                    __html: props.overview
                    } } />
        </div>
        <div className="right">
            
        </div>

        </div>
        
        <style jsx>{`
        .page-header {
            padding: 2.5rem 0 1.5rem;
            position:relative;
            overflow:hidden;
        }
        .header-image {
            background-size: 100%;
            display: block;
            filter: blur(8px);
            position: absolute;
            right: 0px;
            top: -50%;
            z-index: 0;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            opacity: 1;
            width:100%;
            height: auto;
            transition: .3s ease;

            margin: auto;
            /* top: 0; left: 0; bottom: 0; right: 0; */
        }
        .is-visible .header-image {
            opacity:1;
        }
        .page-header .container {
            position: relative;
        }
        .breadcrumbs {
            display:flex;
            /* justify-content: space-between; */
            align-items:center;
            margin-bottom:0.5rem;
        }
        .page-header h1 {
           font-weight:bold;
        }
        .page-header p {
            color: rgb(85, 85, 85);
        }
        .page-header p.date {
            color:#fff;
            margin:0;
            font-size: 0.9rem;
            margin-left: 1rem;
            opacity:0.8;
        }
        .page-header a {
            opacity: 0.8;
            color:#212529;
            transition:.3s ease;
            text-decoration:none;
        }
        .page-header a:hover {
            opacity:1;
            /* color:#212529; */
            color:#fff;
        }
        .is-post {
            background: rgb(111,169,165);
            background: linear-gradient(90deg, rgba(111,169,165,1) 0%, rgba(209,224,223,1) 100%);
            color:#fff;
        }
        .is-post a {
            color:#fff;
        }

        a.category.button {
            background-color:rgba(255, 255, 255, 0.12);
            color: rgb(153,153,153);
            border-radius: 500px;
            padding: 1.5px 10px;
            font-size:0.9rem;
            margin-left:1rem;
            text-transform:uppercase;
            color: rgba(255,255,255,0.7);
        }

        
        @keyframes fadeInImg {
            0%   { opacity: 0; }
            100% { opacity: 1; }
        }
    

    .img-loading {
    opacity: 0
    width: 100%
    height: auto
    }
    .img-loaded {
    animation: fadeInImg cubic-bezier(0.23, 1, 0.32, 1) 1
    position: relative
    opacity: 0
    animation-fill-mode: forwards
    animation-duration: 0.7s
    animation-delay: 0.1s
    }

        `}</style>
    </div>
)};


function ordinal(date) {
    if(date > 20 || date < 10) {
      switch(date%10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    return "th";
  }

function dateConvert(unformatted) {
    // let date = new Date(`${unformatted*1000}`);
    let date = new Date(unformatted);
    // console.log(`${date}`)
    let year = date.getFullYear();
    let month = date.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let dateWithSuffix = ordinal(day);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let fullDate = `${day}${dateWithSuffix} ${months[month]} ${year}`;
    return fullDate;
}

export default PageHeader;