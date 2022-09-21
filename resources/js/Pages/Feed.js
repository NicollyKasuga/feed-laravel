import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";

export default function Feed() {
    useEffect(() => {
        let allPosts = () => {
            axios.get("/posts").then((response) => console.log(response));
        };
        allPosts();
    });

    return (
        <>
            <Header />
        </>
    );
}
