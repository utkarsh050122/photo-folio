import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AlbumList from "./component/AlbumList/AlbumList";


function App() {
  return (
    <>
      {/* upper navbar of the page */}
      <Navbar />

      {/* main container of the page */}
      <AlbumList />
    </>
  );
}

export default App;
