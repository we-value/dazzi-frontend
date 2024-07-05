import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:8080/member",
      data: JSON.stringify({ id: "1" }),
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      console.log(res);
      setData(JSON.stringify(res.data)).catch((err) => console.log(err));
    });
  }, []);

  return (
    <>
      <h2>받아온 값 : {data}</h2>
    </>
  );
}

export default App;
