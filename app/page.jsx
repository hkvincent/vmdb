// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

// export const dynamic = "force-dynamic"; // this is the fix

import CardContainer from "components/CardContainer";
import { Suspense } from "react";
import Loading from "components/PageLoading";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CardContainer genre={searchParams.genre} />
      </Suspense>
    </div>
  );
}

export async function generateMetadata({ searchParams }) {
  return {
    title: `VMDB : ${searchParams.genre === "fetchTopRated" ? "Top Rated" : "Trending"}`,
    description: `VMDB, your best movie database`,
  };
}
