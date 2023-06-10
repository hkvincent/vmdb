"use client";
import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
export default function Results({ results, apiKey }) {

  const API_KEY = process.env.API_KEY;

  const [page, setPage] = useState(3);
  const [data, setData] = useState(results);

  const loader = useRef(null);

  useEffect(() => {
    const loadMoreData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`);
      const newData = await response.json();
      setData(prevData => [...prevData, ...newData.results]);
    };

    apiKey && loadMoreData();
  }, [page]);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, []);

  useEffect(() => {
    setData([...results])
  }, [results])

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }
  // console.log(data[0]);
  // console.log(data.length);
  // console.log(results[0])
  // console.log(results.length)
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {data.map((result) => (
        <Card key={result.id} result={result} />
      ))}
      <ScrollToTopButton />
      <div ref={loader}>
        <h2>Loading More...</h2>
      </div>
    </div>
  );
}
