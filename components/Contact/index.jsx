import Layout from "../Layout"

const Contact = ({children}) => {

    return(
        <Layout title="Contact-us">
            <h1>
                Hello, {children}
            </h1>
         </Layout>
    )
}

export default Contact;