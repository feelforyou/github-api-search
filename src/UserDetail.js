import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const [userData, setUserData] = useState({});
  const { loginID } = useParams();

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${loginID}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [loginID]);
  console.log(userData);

  return (
    <div className="userdetail-container">
      <Link className="userdetail-link " to={"/"}>
        Back to Home
      </Link>
      <h1>User Info</h1>
      <section className="userdetail-section">
        <article className="userdetail-article">
          <h2>{userData?.name || userData.login}</h2>
          <img
            className="userdetail-img"
            src={userData?.avatar_url}
            alt="User Avatar"
          />
        </article>
        <article className="userdetail-info">
          <h3>public repos: {userData?.public_repos}</h3>
          <p className="userdetail-url">
            <a target="_Blank" href={userData?.html_url}>
              {userData?.html_url}
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default UserDetail;
