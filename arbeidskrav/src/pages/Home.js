import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";
import MovieCards from "../components/MovieCards";


export default function Home() {
    return(
        <>
            <Layout >
            <MovieCard />
            <MovieCards />
            </Layout>
        </>
    )
}