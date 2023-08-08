import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import Loading from "./Components/Loading";

const UserDetail = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const { loginID } = useParams();

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${loginID}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [loginID]);
  console.log(userData);
  if (loading) {
    return <Loading />;
  }
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
            <a
              rel="noopener noreferrer"
              target="_Blank"
              href={userData?.html_url}
            >
              {userData?.html_url}
            </a>
          </p>
          <p className="userdetail-follow">
            <AiFillLike className="userdetail-icon" />
            following: {userData?.following || 0}
            <span>
              <FcLike className="userdetail-icon" />
              followers: {userData?.followers || 0}
            </span>
          </p>
        </article>
      </section>
    </div>
  );
};

export default UserDetail;
