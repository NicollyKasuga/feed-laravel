import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Header() {
    let filenami;
    function createPost() {
        axios
            .post("/posts", {
                author: "oioi",
                category: "categoria1",
                textContent: "conteudoo",
                filename: "uma File aí",
                url: "URLalsidhjlasijd",
            })
            .then((response) => console.log(response));
    }
    return (
        <>
            <h1>header</h1>
            <button onClick={() => createPost()}>APERTA AQUI</button>
        </>
    );
}
