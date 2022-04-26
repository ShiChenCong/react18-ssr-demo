import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgUrl } from "../store/index";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div
      className="home"
      onClick={() => {
        dispatch(getImgUrl());
      }}
    >
      this is React App render in server
      <img src={state.url} alt="scc"></img>
      <div>{state.url}</div>
      <Link to="/login">go</Link>
    </div>
  );
}

export async function getInitialProps(store) {
  // console.log('在服务端执行了getInitialProps', store.dispatch)
  return store.dispatch(getImgUrl());
}
