import Layout from '../components/Layout.js'
import PageHeader from "../components/PageHeader"

import axios from 'axios';

const About = props => {
    console.log(props)
    return (
        <div>
            
            <PageHeader 
                header="About"  
            />


            <div className="container">
                <div className="row">
                    <div className="col-md-7" dangerouslySetInnerHTML={{
                            __html: props.about.content.rendered
                    }} />
                </div>
            </div>

        </div>
    )
}

About.getInitialProps = async function(context) {
    const res = await axios.get('https://potey.co.uk/wp-json/wp/v2/pages/49')

    return { 
        about: res.data
    }
}

export default About