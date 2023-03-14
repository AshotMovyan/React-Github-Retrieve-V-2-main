import React from "react";

const UserInfoCard = ({ userData }) => {
  return (
    <div className="userInfoCard square border rounded">
      {userData.avatar_url ? (
        <div className="imageBlock">
          <img
            src={userData.avatar_url}
            alt="avatar"
            className="rounded-circle"
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className="InfoBlockText">
        {userData.name ? (
          <div className="dataitem">
            <span style={{ fontWeight: "bold" }}>Name: </span> {userData.name}
          </div>
        ) : (
          <div></div>
        )}
        {userData.location ? (
          <div className="dataitem">
            <span style={{ fontWeight: "bold" }}>Location: </span>{" "}
            {userData.location}
          </div>
        ) : (
          <div></div>
        )}
        {userData.public_repos ? (
          <div className="dataitem">
            <span style={{ fontWeight: "bold" }}>Public repos: </span>{" "}
            {userData.public_repos}
          </div>
        ) : (
          <div></div>
        )}
        {userData.created_at ? (
          <div className="dataitem">
            <span style={{ fontWeight: "bold" }}>Created at: </span>{" "}
            {userData.created_at.slice(0, 10)}
          </div>
        ) : (
          <div></div>
        )}
        {userData.company ? (
          <div className="dataitem">
            <span style={{ fontWeight: "bold" }}>Company: </span>{" "}
            {userData.company}
          </div>
        ) : (
          <div></div>
        )}
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary" style={{ marginTop: "10px" }}>
            Go to user GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default UserInfoCard;
