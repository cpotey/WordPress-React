import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = (props) => (
  <footer>
    
    <div className="container">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/posts">
        <a style={linkStyle}>Blog</a>
      </Link>
    </div>
    <style jsx>{`
        footer {
          border-top: 1px solid rgb(232, 232, 232);
          padding:20px;
          margin-top:3.5rem;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: rgb(153, 153, 153);
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      <style jsx global>{`
      body { 
        margin:0;
        padding:0;
      }
    `}</style>
  </footer>
)

export default Footer