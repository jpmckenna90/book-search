import React, {useState, useEffect} from "react";
// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./Components/Navbar/Navbar";
import Jumbo from "./Components/Jumbotron/Jumbotron";
import BookSearch from "./Components/BookSearch/BookSearch";
import ResultsCard from "./Components/SearchResultsCard/SearchResultsCard"

function App() {
  let [bookList, setBookList] = useState([]);
  
  return (
    <div>
      <TopNav />
      <Jumbo />
      <BookSearch />
      <ResultsCard />
    </div>
  );
}

export default App;
