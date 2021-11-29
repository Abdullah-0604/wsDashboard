import "./App.css";
import React, { useState, useEffect } from "react";
import Appbar from "./components/Appbar";
import CardGroup from "./components/CardGroup";
import Bottom from "./components/Bottom";
import { CssBaseline } from "@mui/material";
const URL = "ws://127.0.0.1:8080";

function App() {
  const [data, setData] = useState(null);
  const [returnData, setReturnData] = useState(null);
  const [ws, setWs] = useState(new WebSocket(URL));

  const submitMessage = (text) => {
    const clientData = { text: text };
    ws.send(JSON.stringify(clientData));
    ws.onmessage = (e)=>{
      console.log(e)
    }
  }

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      const response = JSON.parse(e.data);
      setData(response);
    };
    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected');
        setWs(new WebSocket(URL));
      }
    }
  }, [data,ws]);
  return(
    <>
    <Appbar data={data}/>
    <CardGroup data={data}/>
    <Bottom data={data}/>
    <CssBaseline/>
    </>
  )
}

export default App;
