import React from "react";
import { useEffect } from "react";

const Repositories = ({ reposData }) => {
  useEffect(() => {
    console.log("======", reposData[0].git_url);
  }, [reposData]);

  return (
    <div className="reposBlock">
      <table className="table table-responsive table-bordered table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Created at</th>
            <th scope="col">repository url</th>
          </tr>
        </thead>
        <tbody>
          {reposData?.map((property, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{property.name}</td>
              <td style={{ minWidth: "120px" }}>
                {property.created_at.slice(0, 10)}
              </td>
              <td className="text-primary">
                <a
                  href={property.clone_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {property.clone_url.substring(0, 50)}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Repositories;
