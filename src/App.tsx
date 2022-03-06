import React from "react";
import "./App.css";
import { Image } from "semantic-ui-react";
import { AppHeader, Home, Post } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <div className="app-banner">
        <div className="inline-flex">
          <span>
            Powered by{" "}
            <a href="https://slash.dgraph.io" target="__blank">
              <strong>Slashdfd GraphQL</strong>
            </a>
          </span>
          <Image size="mini" src="/lighting.svg" className="lightning-logo" />
        </div>
      </div>
      <div className="App">
        <BrowserRouter>
          <AppHeader />
          <Routes>
            <Route path="/post/:id" element={Post} />
            <Route path="/" element={Home} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
