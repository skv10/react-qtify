import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import styles from "./AlbumList.module.css";
//import { fetchFilters } from "../api/api";
import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "../api/api";

function AlbumList(){

    const [data, setData] = useState({});

  // const r = {
  //   topAlbums: [{}, {}, {}, {}],
  //    newAlbums: [{}, {}, {}, {}],
  //    genres: ['rock', 'pop', 'jazz'],
  //    songs: []
  // };

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        // Object.assign would also work
        return { ...prevState, [key]: data };
      });
    });
  };


   useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
  }, []);

    const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

    console.log("genres", genres);

    return (
        <>
        <Navbar />
        <Hero />
        <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
          hide={true}
        />
      </div>
        </>
    )
}

export default AlbumList;