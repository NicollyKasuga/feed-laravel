import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Posts from "../components/Posts";

export default function Feed() {
    return (
        <>
            <NavBar />
            <Posts />
        </>
    );
}
