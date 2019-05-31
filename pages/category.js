import Layout from '../components/Layout.js'

import PostList from "../components/PostList"
import Pagination from "../components/Pagination";
import PageHeader from "../components/PageHeader"

import { withRouter } from "next/router";
import axios from 'axios';

const CategoryPage = (props) => {
    console.log(props)
    return (
        <div>

           
            <PageHeader 
              header={`Category: ${props.category.name}`} 
              overview={props.category.description} 
            />
              

            {<PostList posts={props.posts} />}
            <Pagination totalPages={props.totalPages} />
        </div>
    )
}

CategoryPage.getInitialProps = async function(context) {
    
    const slug = context.query.slug 
        const currentPage = context.query.page ? context.query.page : 1;

        const categories = await axios.get('https://blog.connorpote.co.uk/wp-json/wp/v2/categories', {
                params: {
                  slug: slug
                }
            })
            
        const category = categories.data[0];
        console.log(category)
        const posts = await axios.get('https://blog.connorpote.co.uk/wp-json/wp/v2/posts?_embed', {
                params: {
                    categories: category.id,
                    per_page: 10,
                    page: currentPage
                }
            })
        console.log(posts)
        return { 
            category:category,
            posts:posts.data, 
            totalPages: posts.headers['x-wp-totalpages']
        };

       
    }

export default withRouter(CategoryPage);