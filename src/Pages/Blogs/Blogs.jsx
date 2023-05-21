import dynamicTitle from "../../hook/dynamicTitle";


const Blogs = () => {
    dynamicTitle('Blogs');
    return (
        <div className='my-8'>
            <div className='text-center'>
                <h1 className='text-4xl my-4 font-semibold'>Blogs Are Here</h1>
            </div>
            <div className='md:mx-8 mx-4 flex flex-col gap-4np'>
                <div>
                    <h1 className="text-xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p>An access token is a credential that is issued to a client by an authentication server after the client successfully authenticates itself<br />A refresh token is also issued alongside the access token. Its purpose is to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are long-lived and can be used to request new access tokens without re-authenticating the client.<br />To store these tokens on the client-side there use HTTP-only cookies or local storage. Http cookies is more secure then local storage, but both are not much secure.</p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">2. Compare SQL and NoSQL databases?</h1>
                    <p>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems <br /> <span className="font-semibold">SQL: </span> SQL databases are based on a relational model. They use structured schemas and tables with predefined relationships between them. This databases system provides a powerful and standardized query language (SQL) that allows complex queries, joins, and aggregations across multiple tables. <br /><span className="font-semibold">NoSQL: </span> NoSQL databases, on the other hand, offer a flexible and scalable approach for handling diverse and unstructured data. This database system are designed for scalability, and they can efficiently handle large amounts of data and high read/write workloads. They often use distributed architectures and horizontal scaling techniques.</p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">3. What is express js? What is Nest JS?</h1>
                    <p><span className="font-semibold">Express Js: </span>Express.js is a popular and lightweight web application framework for Node.js. This make easy to use of node js for our backend technology. Express.js is known for its simplicity, ease of use, and extensive ecosystem of middleware and plugins.<br /><span className="font-semibold">Nest.js: </span>Nest.js, on the other hand, is a progressive and opinionated web framework for building scalable and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript's features to provide a structured and modular approach to application development.</p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">4. What is MongoDB aggregate and how does it work?</h1>
                    <p>In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data, perform calculations, and generate aggregated results based on specified criteria.<br />The aggregate method takes an array of pipeline stages as its argument. Each stage defines a specific operation that is applied to the documents in the collection in a sequence. The output of each stage becomes the input for the next stage, forming a pipeline of data processing. The stages of pipeline is [match, group, project, sort, limit, lookup, unwind, count].</p>
                </div>
            </div>    
        </div>
    );
};

export default Blogs;