import axios from "axios";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

export default function Feed() {
    useEffect(() => {
        let allPosts = () => {
            axios.get("/posts").then((response) => console.log(response));
        };
        allPosts();
    });

    return (
        <>
            <NavBar />
            <Posts />
        </>
    );
}
