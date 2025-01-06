export async function getServerSideProps() {
    // Fetch data from external API
    const response = await fetch('https://dummyjson.com/products/1');
    const data = await response.json();
    // Pass data to the page via props
    return { props: { data } }
}

const APIIntegrationDemo = ({ data }) => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default APIIntegrationDemo