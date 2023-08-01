
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MoviesList = ({apiPath, title}) => {
  const {data: movies} = useFetch(apiPath)

  useTitle(title)

    return (
      <main>
        <section className= "py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {movies.map ((movie)=> {
              return <Card movie= {movie} key = {movie.id}/>
            })} 

          </div>
        </section>
      </main>
    )
  }
  