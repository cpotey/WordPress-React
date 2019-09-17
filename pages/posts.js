import Layout from '../components/Layout.js'

import PostList from "../components/PostList"
import Pagination from "../components/Pagination";
import PageHeader from "../components/PageHeader"

import { withRouter } from "next/router";
import axios from 'axios';



const Posts = (props) => {
    console.log(props)
    return (
        <div>

           
           
            <PageHeader 
              header="Blog" 
            />
              

            {<PostList posts={props.posts} />}
            <Pagination totalPages={props.totalPages} />
        </div>
    )
}

Posts.getInitialProps = async function({query}) {
    const currentPage = query.page ? query.page : 1;
    const res = await axios.get('https://potey.co.uk/wp-json/wp/v2/posts?_embed', {
        params: {
          page: currentPage,
          per_page: 10
        }
    })
    // console.log(res.data)
    // console.log('totalposts: ', res.headers['x-wp-total']);
    // console.log('totalpostspages: ', res.headers['x-wp-totalpages']);
  
    return {
      posts: res.data,
      totalPages: res.headers['x-wp-totalpages']
    }
}

export default withRouter(Posts);
