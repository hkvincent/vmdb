"use client";
import Card from "./Card";
import { useState, useEffect, useRef, useCallback } from "react";
import ScrollToTopButton from "components/ScrollToTopButton";
import Loading from "components/PageLoading";

export default function Results({ results, params }) {
  const [page, setPage] = useState(3);
  const [data, setData] = useState(results);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  // Function to load more data
  const loadMoreData = async () => {
    setLoading(true);
    const response = await fetch(`/loadmore?page=${page}`);
    const newResults = await response.json();
    setData((prevData) => [...prevData, ...newResults.newData.results]);
    setLoading(false);
  };

  // Observer callback
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  // Intersection Observer to load more data
  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "20px",
        threshold: 0.5
      });
      if (loader.current) {
        observer.observe(loader.current);
      }

      // Cleanup observer on component unmount
      return () => {
        if (loader.current) {
          observer.unobserve(loader.current);
        }
      };
    }
  }, [loading, handleObserver]);

  // Load more data when page changes
  useEffect(() => {
    if (page > 3) {
      loadMoreData();
    }
  }, [page]);

  // Set initial data
  useEffect(() => {
    setData([...results]);
  }, [results]);

  // // set scroll restoration to manual
  // useEffect(() => {
  //   if ('scrollRestoration' in history && history.scrollRestoration !== 'manual') {
  //     history.scrollRestoration = 'manual';
  //   }
  // }, []);

  // // handle and store scroll position
  // useEffect(() => {
  //   console.log('route registered');
  //   const handleRouteChange = () => {
  //     console.log('route change');
  //     sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  //   };
  //   router.events.on('routeChangeStart', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [router.events]);

  // // restore scroll position
  // useEffect(() => {
  //   if ('scrollPosition' in sessionStorage) {
  //     window.scrollTo(0, Number(sessionStorage.getItem('scrollPosition')));
  //     console.log('scroll restored');
  //     sessionStorage.removeItem('scrollPosition');
  //   }
  // }, []);

  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {data.map((result) => (
          <Card key={result.id} result={result} params={params} />
        ))}
        <ScrollToTopButton />
        <div id="modal-root" className="scroll-to-top" />
      </div>
      <div className="flex justify-center items-center" ref={loader}>
        {loading && <Loading />}
      </div>
    </>
  );
}
