import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const GithubData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.github.com/users");
      setData(response.data);
    };
    getData();
  }, []);
  return (
    <Container>
      <h1 className="display-6 text-center my-4 fw-semibold">
        Github Data Using Api
      </h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            const { id, login, html_url, avatar_url } = data;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <Image
                    src={avatar_url}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50px",
                    }}
                  />
                </td>
                <td>{login}</td>
                <td>
                  <a
                    href={html_url}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {html_url}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default GithubData;
