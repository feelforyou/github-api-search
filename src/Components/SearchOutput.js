import React from "react";
import { Link } from "react-router-dom";

const SearchOutput = ({ users }) => {
  return (
    <div className="card-container">
      {users.map((user) => {
        const { html_url, avatar_url, login, id } = user;

        return (
          <Link to={`/${login}`}>
            <div className="card" key={id}>
              <p className="login">{login}</p>

              <div className="card-img-container">
                <img
                  className="card-img"
                  src={avatar_url}
                  alt="user avatar"
                  height="250px"
                  width="250px"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchOutput;
