import SearchBar from "./Components/SearchBar";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="app">
      <div className="header">
        <div>
          <h3>Search Github User App</h3>
        </div>
        <div className="title-underline"></div>
        <div className="app-image-container">
          <FaGithub className="app-image" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
