"use client";
import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import ScrollToTopButton from "components/ScrollToTopButton";
import Loading from "components/PageLoading";
export default function Results({ results }) {

  const API_KEY = process.env.API_KEY;

  const [page, setPage] = useState(3);
  const [data, setData] = useState(results);
  const [loading, setLoading] = useState(true);
  const loader = useRef(null);

  useEffect(() => {

    (async () => {
      var resultJson = await fetch("/loadmore?page=" + page);
      var result = await resultJson.json();
      setData(prevData => [...prevData, ...result.newData.results]);
    })();

  }, [page]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [loading]);

  useEffect(() => {
    setData([...results]);
    setLoading(false);
  }, [results])

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {data.map((result) => (
          <Card key={result.id} result={result} />
        ))}
        <ScrollToTopButton />
      </div>
      <div className="flex justify-center items-center" ref={loader}>
        <Loading />
      </div>
    </>
  );
}
