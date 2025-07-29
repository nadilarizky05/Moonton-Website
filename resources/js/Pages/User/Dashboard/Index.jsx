import Authenticated from "@/Layouts/Authenticated/Index"
import Flickity  from "react-flickity-component"
import { Head } from "@inertiajs/react"
import FeaturedMovie from "@/Components/FeaturedMovie"
import MovieCard from "@/Components/MovieCard"

export default function Dashboard({auth, featuredMovies = [], movies = []}) {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1",
    }

    // Debug: uncomment untuk cek data yang diterima
    // console.log('Featured Movies:', featuredMovies);

    return(
        <Authenticated auth={auth}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                {featuredMovies && featuredMovies.length > 0 ? (
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featuredMovies.map((featuredMovie, index) => (
                            <FeaturedMovie 
                                key={featuredMovie.id || index}
                                slug={featuredMovie.slug}
                                name={featuredMovie.name}
                                category={featuredMovie.category}
                                thumbnail={featuredMovie.thumbnail}
                                rating={featuredMovie.rating}
                            />
                        ))}
                    </Flickity>
                ) : (
                    <div className="text-gray-500">No featured movies available</div>
                )}
            </div>

            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                {movies && movies.length > 0 ? (
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {movies.map((movie, index) => (
                            <MovieCard
                                key={movie.id || index}
                                slug={movie.slug}
                                name={movie.name}
                                category={movie.category}
                                thumbnail={movie.thumbnail}
                                rating={movie.rating}
                            />
                        ))}
                    </Flickity>
                ) : (
                    <div className="text-gray-500">No movies available</div>
                )}
            </div>
        </Authenticated>
    )
}