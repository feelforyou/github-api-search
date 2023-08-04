import React from "react";

const SearchOutput = ({ users }) => {
  return (
    <div className="card-container">
      {users.map((user) => {
        const { html_url, avatar_url, login, id } = user;
        return (
          <div className="card" key={id}>
            <a
              className="link"
              href={html_url}
              rel="noreferrer"
              target="_blank"
            >
              <p className="login">{login}</p>
            </a>
            <a href={html_url} rel="noreferrer" target="_blank">
              <img
                className="card-img"
                src={avatar_url}
                alt="user avatar"
                height="250px"
                width="250px"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchOutput;
