import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard";
import Repositories from "./Repositories";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const [urlusername, setUrlusername] = useState(queryParams.get("search"));
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState(Object);
  const [reposData, setReposData] = useState();
  const [currentRecords, setCurrentRecords] = useState();
  const [nPages, setNpages] = useState(1);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    paginationFunc();
  }, [currentPage, reposData]);

  let gitHubUrl = `https://api.github.com/users/${urlusername}`;
  let reposUrl = `https://api.github.com/users/${urlusername}/repos`;

  const getUserData = async () => {
    navigate({ pathname: "/info", search: `?search=${urlusername}` });
    setIsLoading(true);
    setCurrentPage(1);
    console.log("!!!!!!!!!!!!", userData);
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    const reposResponse = await fetch(reposUrl);
    const reposJsonData = await reposResponse.json();

    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
      setReposData(reposJsonData);
      setIsLoading(false);
      console.log(reposJsonData);
    } else if (urlusername !== "") {
      alert("Username does not exist");
    } else {
      setUserData({});
    }
  };

  const paginationFunc = async () => {
    const reposResponse = await fetch(reposUrl);
    const reposJsonData = await reposResponse.json();
    setCurrentRecords(
      reposJsonData.slice(indexOfFirstRecord, indexOfLastRecord)
    );
    setNpages(Math.ceil(reposJsonData.length / recordsPerPage));
  };

  useEffect(() => {
    if (urlusername !== null && urlusername.length > 3) {
      getUserData();
    }
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center main">
      <SearchBar getUserData={getUserData} setUrlusername={setUrlusername} />
      <br />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {reposData ? (
            <div
              className="infoBlock d-flex justify-content-between"
              style={{ width: "100%" }}>
              <UserInfoCard userData={userData} />
              <div className="mainInfoBlock">
                <Repositories reposData={currentRecords} />
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  recordsPerPage={recordsPerPage}
                  setRecordsPerPage={setRecordsPerPage}
                />
              </div>
            </div>
          ) : (
            <h1 className="text-secondary">Search User by git Username</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Main;
