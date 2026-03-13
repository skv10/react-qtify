import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function AlbumId() {
  const { id } = useParams();

  return (<>
  <Navbar />
  {id}
  </>);
}