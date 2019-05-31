import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = (props) => (
  <footer>
    
    <div className="container">
     
      <div className="right">
        <p>Built by <a href="https://connorpote.co.uk/" target="_blank" rel="noopener noreferrer">Connor Pote</a>. WordPress version <a href="https://blog.connorpote.co.uk/" target="_blank" rel="noopener noreferrer">here</a></p>
      </div>
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
          color: rgb(153, 153, 153);
          text-decoration:underline;
        }
        p {
          color: rgb(153, 153, 153);
          margin:0;
        }

        a:hover {
          opacity: 0.6;
        }
        .container {
          display:flex;
        }
        .right {
          margin-left:auto;
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