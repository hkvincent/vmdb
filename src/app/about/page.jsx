"use client";
import Obfuscate from "react-obfuscate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import Head from "../head";



export const metadata = {
  title: 'VMDB : About',
  description: 'find your fav movie',
}



export default function About() {
  return (
    <>

      <title>VMDB : About</title>

      <div className="max-w-6xl mx-auto space-y-4 p-4">
        <h1 className="text-2xl font-medium text-amber-600">About</h1>
        <p>
          Welcome to VMDB, the movie database website! I am of passionate movie
          enthusiasts who create a one-stop destination for all your movie-related needs.
        </p>
        <p>
          Contact me :
          <Obfuscate email="hkvincentchan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 mr-3" />
          </Obfuscate>
        </p>
        {/* 
      <p>
        Our website is designed to provide you with a comprehensive database of
        movies from all around the world, along with the latest news, reviews,
        and trailers. Our movie database is constantly updated with new
        releases, ensuring that you have access to the latest and greatest in
        the world of cinema. You can search for movies by title, director,
        actor, genre, or release date, making it easy to find the perfect movie
        for any occasion.
      </p>

      <p>
        In addition to our extensive movie database, we also offer a platform
        for movie lovers to connect and share their thoughts on the latest
        releases. Our community section includes a forum where you can discuss
        your favorite films with like-minded individuals and read reviews and
        ratings from other users. We also have a section dedicated to movie news
        and trailers, keeping you updated with the latest happenings in the
        world of cinema. Thank you for visiting our website and we hope you
        enjoy your time browsing through our movie database. If you have any
        feedback or suggestions, please feel free to contact us. We are always
        looking for ways to improve and enhance the user experience on our
        website. Happy browsing!
      </p> */}
      </div>
    </>
  );
}
