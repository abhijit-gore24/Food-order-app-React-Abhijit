import User from "./User";
import { useState, useEffect } from "react";
import "./About.css";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const About = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/abhijit-gore24"
      );
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card">
      {/*   <h1>Count: {count}</h1>
        <button className="card-button" onClick={() => setCount(count + 1)}>
          Increase Count
        </button> */}
        <h1>About</h1>
        <h2>This is Abhijit Gore's site</h2>
        {userData ? (
          <div className="card-details">
            
            {userData && (
              <img
                src={userData.avatar_url}
                style={{ height: "100px", width: "100px", borderRadius: "50%", marginLeft: "250px"}}
                alt="User Avatar"
              />
            )}

            <h2>Login Username: {userData.login}</h2>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Bio:</strong> {userData.bio}
            </p>
            <p>
              <strong>Public Repos:</strong> {userData.public_repos}
            </p>
            <p>
              <strong>Following:</strong> {userData.following}
            </p>
            <p>
              <strong>Followers:</strong> {userData.followers}
            </p>
            <p>
              <strong>URL:</strong>{" "}
              <a href={userData.html_url} target="_blank" rel="noreferrer">
                {userData.html_url}
              </a>
            </p>
            <p>
              <strong>Location:</strong> {userData.location}
            </p>
            <p>
              <strong>User Created Date:</strong> {userData.created_at}
            </p>
            <p>
              <strong>Updated Date:</strong> {userData.updated_at}
            </p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <User
        name={"Abhijit Gore (Software Developer, DevOps Engineer)"}
        mobile={"+91 8605341106"}
      />
    </>
  );
};

export default About;
