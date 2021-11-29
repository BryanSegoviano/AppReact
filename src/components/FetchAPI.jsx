import React from "react";

function FetchAPI() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    obtenerPost();
  }, []);

  const obtenerPost = async () => {
    const datos = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await datos.json();
    setPosts(posts);
  };

  return (
    <div>
      <div>
        <h2>POSTS de jsonplaceholder</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
        <table style={{ width: "50%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((data) => (
              <tr>
                <td key={data.id}>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchAPI;
