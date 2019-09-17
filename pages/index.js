import Layout from '../components/Layout.js'
import PageHeader from "../components/PageHeader"
import PostList from "../components/PostList"

import axios from 'axios';

const Index = props => {

  console.log(props)

  return (
    <div>
      
        <PageHeader 
            header={props.settings.name} 
            overview={props.settings.description}
        />
        <div className="container">
          <div className="row">
              <div className="col-md-7" dangerouslySetInnerHTML={{
                      __html: props.homepage.content.rendered
                }} />
          </div>
        </div>

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

        
</div>

  )
}

Index.getInitialProps = async function(context) {

  const settings = await axios.get(`https://potey.co.uk/wp-json`)
  const homepage = await axios.get('https://potey.co.uk/wp-json/wp/v2/pages/62')
  const posts = await axios.get('https://potey.co.uk/wp-json/wp/v2/posts?_embed', {
        params: {
          page: 1,
          per_page: 6
        }
  })

  return { 
      settings: settings.data,
      homepage: homepage.data,
      posts: posts.data
  }

}

export default Index