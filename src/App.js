import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/dataSlice.js";
import Loading from "./store/Loading";

function App() {
  const data = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div >
      <div>
        <div
          style={{
            margin: "3rem 0rem",
            textDecoration: "underline",
            width: "100%",
          }}
        >
          <h2 className="text-center text-secondary mb-5">Redux Assignment: Redux API Integration (Redux-Toolkit)</h2>
        </div>
        <div style={{ width: "max-content" ,marginTop:"25px" }}>
          <table className="table table-warning table-striped">
            <thead className="table table-secondary">
              <tr className="headings">
                <th>S.no</th>
                <th>User_Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {!data.length > 0 ? (
                <Loading />
              ) : (
                data.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{`User_${index + 401}`}</td>
                      <td>{items.name}</td>
                      <td>{items.username}</td>
                      <td>{items.email}</td>
                      <td>{items.address.zipcode}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
