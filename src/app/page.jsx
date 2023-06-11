// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const responses = await Promise.all([
    fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&page=1`, { next: { revalidate: 10000 } }),
    fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&page=2`, { next: { revalidate: 10000 } })
  ]);

  responses.forEach((res, i) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch data from page ${i + 1}`); // this will be caught by the error page and passed to the page as props
    }
  });

  const data1 = await responses[0].json(); // data from page 1
  const data2 = await responses[1].json(); // data from page 2
  const results = [...data1.results, ...data2.results]
  return (
    <div>
      <Results results={results} apiKey={API_KEY} />
    </div>
  );
}

export async function generateMetadata({ searchParams }) {
  return {
      title: `VMDB : ${searchParams.genre  === "fetchTopRated" ? "Top Rated" : "Trending"}`,
      description: `VMDB, your best movie database`,
  };
}
