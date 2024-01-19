import React from 'react';
import Results from "components/Results";
const API_KEY = process.env.API_KEY;
const CardContainer = async ({ genre }) => {
  genre = genre || "fetchTrending";
  const responses = await Promise.all([
    fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&page=1`, { next: { revalidate: 3600 } }),
    fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&page=2`, { next: { revalidate: 3600 } })
  ]);


  responses.forEach((res, i) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch data from page ${i + 1}`); // this will be caught by the error page and passed to the page as props
    }
  });

  const data1 = await responses[0].json(); // data from page 1
  const data2 = await responses[1].json(); // data from page 2
  const results = [...data1.results, ...data2.results];

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default CardContainer;

