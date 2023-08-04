import { useEffect, useState } from "react";
import HttpLimitErrorMessage from "./HttpLimitErrorMessage";
import SearchOutput from "./SearchOutput";
import Loading from "./Loading";

const SearchBar = () => {
  const [textInput, setTextInput] = useState("");
  const [users, setUsers] = useState([]);
  const [HttpLimitErrMessage, setHttpLimitErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchGithubUsers = async (textInput) => {
    try {
      if (textInput) {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/search/users?q=${textInput}`
        );
        const data = await response.json();
        setUsers(data.items);
        setLoading(false);
        setShowClearBtn(true);
        if (!response.ok) {
          setUsers([]);
          setHttpLimitErrorMessage(true);
          setTextInput("");
          setIsDisabled(true);
          setShowClearBtn(false);
          setTimeout(() => {
            setIsDisabled(false);
            setHttpLimitErrorMessage(false);
          }, 61000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clearList = () => {
    setUsers([]);
    setTextInput("");
  };

  const changeHandler = (e) => {
    setTextInput(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGithubUsers(textInput);
    }, 1000);
    return () => clearTimeout(timer);
  }, [textInput]);

  return (
    <div>
      {HttpLimitErrMessage && <HttpLimitErrorMessage />}
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          type="text"
          onChange={changeHandler}
          value={textInput}
          disabled={isDisabled}
          placeholder="Type username..."
        />

        {showClearBtn && (
          <button onClick={clearList} className="btn clear-btn">
            clear the list
          </button>
        )}
        {HttpLimitErrMessage && (() => setShowClearBtn(false))}
        {users && textInput && <SearchOutput users={users} />}
        {loading && <Loading />}
      </div>
    </div>
  );
};
export default SearchBar;
