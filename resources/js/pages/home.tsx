
import Layout from '@/layouts/layout';
function Home() {
    return <h1>Home Page</h1>
};

Home.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Home;