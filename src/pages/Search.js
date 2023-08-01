import { useSearchParams } from "react-router-dom";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";

import { useTitle } from "../hooks/useTitle";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data: movies} = useFetch(apiPath, queryTerm)


 useTitle(`${queryTerm}`)

    return (
      <main>
        <section>
          <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0? `No results found`: `result:`}</p>
        </section>
        <section className= "py-7">
          <div className="flex justify-start flex-wrap">
            {movies.map ((movie)=> {
              return <Card movie= {movie} key = {movie.id}/>
            })} 

          </div>
        </section>
      </main>
    )
  }
  